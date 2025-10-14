import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 py-12">
      <img
        src="/images/illustrations/404.svg"
        alt="Page Not Found"
        className="w-72 mb-6"
        onError={(e) => {
          // fallback to emoji if image not found
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
        404
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
