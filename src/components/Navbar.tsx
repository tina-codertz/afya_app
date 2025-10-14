import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Stethoscope, Home, Contact, Menu, X } from "lucide-react";
import { FcAbout } from "react-icons/fc";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: FcAbout },
  { name: "Services", path: "/services", icon: Stethoscope },
  { name: "Contact", path: "/contact", icon: Contact },
];

export const Navbar: React.FC = () => {

  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 sticky top-0">
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg flex items-center justify-between px-6 sm:px-8 h-16 relative"
      >
        
        <div className="flex items-center">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Link
           to="/">
            <Heart className="w-6 h-6 text-white"/>
            </Link>
          </div>
           
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
           
            AfyaConnect
          </span>
        
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
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

        {/* Signup Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/auth"
            className="bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-100 rounded-lg px-4 py-2 font-medium hover:text-blue-600 dark:hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 md:hidden z-50"
            >
              <div className="flex flex-col items-center gap-2 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center w-11/12 justify-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition ${
                      location.pathname === item.path
                        ? "bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                        : ""
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                ))}

                <Link
                  to="/auth"
                  onClick={() => setMenuOpen(false)}
                  className="w-11/12 mt-3 text-center bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
