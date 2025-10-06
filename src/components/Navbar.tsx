import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, Stethoscope } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Users },
  { name: "About", path: "/about", icon: Users },
  { name: "Services", path: "/services", icon: Stethoscope },
  { name: "Contact", path: "/contact", icon: Users },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg flex flex-row items-center justify-between px-8 h-16"
      >
        {/* Brand / Logo */}
        <div className="flex items-center">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
            Afya
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg ${
                location.pathname === item.path
                  ? "bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <Link
          to="/auth"
          className="bg-gray-100 hover:bg-blue-50 text-gray-600 rounded-lg p-3 hover:text-blue-600"
        >
          SignUp
        </Link>
        
      </motion.nav>
    </div>
  );
};
