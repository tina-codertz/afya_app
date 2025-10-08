import React, { useState } from "react";
import { useSignIn, useSignUp } from "@clerk/clerk-react";
// Removed import of clerkClient since it's not available in frontend code
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ArrowLeft, GithubIcon, Mail } from "lucide-react";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLoaded: signInLoaded } = useSignIn();
  const { signUp, isLoaded: signUpLoaded } = useSignUp();
  const navigate = useNavigate();

  // Function to save user to MongoDB
  const recordUserToDB = async (userData: { email: string; clerkId: string }) => {
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      console.log("Saved user:", data);
    } catch (error) {
      console.error("Failed to save user:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInLoaded || !signUpLoaded) return;

    try {
      if (isLogin) {
        const result = await signIn.create({ identifier: email, password });

        if (result.status === "complete" && result.createdSessionId) {
          // Use result.userId directly if available, otherwise fallback to email
          const userId = result.userId || email;

          await recordUserToDB({ email, clerkId: userId });
          navigate("/dashboard");
        }
      } else {
        const result = await signUp.create({ emailAddress: email, password });

        if (result.status === "complete" && result.createdUserId) {
          await recordUserToDB({ email, clerkId: result.createdUserId });
          navigate("/dashboard");
        }
      }
    } catch (err: any) {
      alert(err.errors?.[0]?.message || "Something went wrong");
    }
  };

  const handleSocialLogin = async (
    provider: "oauth_google" | "oauth_github" | "oauth_apple"
  ) => {
    if (!signInLoaded) return;
    try {
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/dashboard",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err: any) {
      alert(err.errors?.[0]?.message || "Social login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-center text-blue-400">
          {isLogin ? "Sign in" : "Register"}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Get access to more health features
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleSocialLogin("oauth_google")}
            className="p-3 border rounded-full hover:bg-gray-100"
          >
            <FcGoogle className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleSocialLogin("oauth_github")}
            className="p-3 border rounded-full hover:bg-gray-100"
          >
            <GithubIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleSocialLogin("oauth_apple")}
            className="p-3 border rounded-full hover:bg-gray-100"
          >
            <FaApple className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border rounded-lg p-3">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full outline-none"
            />
          </div>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-300 text-white p-3 rounded-lg hover:bg-blue-400 transition"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {isLogin && (
          <p className="mt-3 text-sm text-center text-gray-600 cursor-pointer hover:underline">
            Forgot your password?
          </p>
        )}

        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-300 cursor-pointer font-medium"
          >
            {isLogin ? "Register" : "Login"}
          </span>
          <Link
            to="/"
            className="p-3 flex text-blue-300 items-center justify-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> go back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
