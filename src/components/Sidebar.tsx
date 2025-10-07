import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ChevronDown,
  Stethoscope,
  BrainCircuit,
  Brain,
  PenTool,
  Users,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  // { name: "Home", path: "/dashboard", icon: Users },
  // { name: "About", path: "/dashboard/about", icon: Users },
  {
    name: "Services",
    path: "/dashboard/services",
    icon: Stethoscope,
    dropdown: [
      { name: "General Consultation", path: "/dashboard/services/general", icon: Stethoscope },
      { name: "Specialist Care", path: "/dashboard/services/specialist", icon: Heart },
      { name: "AI assistance", path: "/dashboard/services/ai", icon:BrainCircuit },
      { name: "Mental Health", path: "/dashboard/services/mental-health", icon: Brain },
    ],
  },
  { name: "Doctors", path: "/dashboard/doctors", icon: Users },
  { name: "Book Appointment", path: "/dashboard/book-appointment", icon: Users },
  { name: "Blog", path: "/dashboard/blog", icon: PenTool },
  // { name: "Contact", path: "/dashboard/contact", icon: Users },
];

export const Sidebar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedState = localStorage.getItem("sidebarCollapsed");
    if (storedState) {
      setCollapsed(storedState === "true");
    }
  }, []);

  // Ensure expanded on medium+ screens; allow collapse only below md
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handle = () => {
      if (mq.matches) {
        setCollapsed(false);
        localStorage.setItem("sidebarCollapsed", "false");
      }
    };
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  // Close any open dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCollapse = () => {
    setCollapsed((prev) => {
      localStorage.setItem("sidebarCollapsed", String(!prev));
      return !prev;
    });
  };

  const handleToggleDropdown = (itemName: string) => {
    setActiveDropdown((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <motion.nav
        ref={navRef}
        initial={{ width: 0 }}
        animate={{ width: collapsed ? 80 : 256 }}
        className="bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-all duration-300 relative"
      >
        <button
          onClick={toggleCollapse}
          className="absolute top-4 right-[-12px] bg-blue-600 text-white p-2 rounded-full shadow-lg z-50"
          aria-label={collapsed ? "Open menu" : "Close menu"}
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>

        <div
          className={`flex items-center justify-center py-6 border-b border-gray-200 dark:border-gray-700 ${
            collapsed ? "flex-col" : "flex-row"
          }`}
        >
          <div className="p-2 bg-blue-600 rounded-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Afya Connect
            </span>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <div key={item.path} className="relative">
              {/* Main row: for dropdown items when expanded, clicking label toggles submenu; otherwise it navigates */}
              <div
                className={`flex items-center justify-between px-4 py-3 text-gray-700  hover:bg-blue-50 hover:text-blue-600  transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                    : ""
                }`}
                onMouseEnter={() => {
                  if (collapsed) setActiveDropdown(item.name);
                }}
                onMouseLeave={() => {
                  if (collapsed) setActiveDropdown(null);
                }}
              >
                {item.dropdown && !collapsed ? (
                  <button
                    type="button"
                    className="flex items-center space-x-2 flex-1 text-left"
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === item.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleDropdown(item.name);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        e.stopPropagation();
                        handleToggleDropdown(item.name);
                      }
                    }}
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </button>
                ) : (
                  <Link to={item.path} className="flex items-center space-x-2 flex-1">
                    <item.icon size={20} />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                )}

                {/* Chevron button to toggle dropdown on click/keyboard when expanded */}
                {!collapsed && item.dropdown && (
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === item.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleDropdown(item.name);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        e.stopPropagation();
                        handleToggleDropdown(item.name);
                      }
                    }}
                    className="p-1 rounded hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <ChevronDown size={16} />
                  </button>
                )}

                {/* Collapsed hover flyout remains for quick access */}
                {collapsed && item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-0 ml-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
                  >
                    {/* Parent link inside flyout */}
                    <Link
                      to={item.path}
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <item.icon size={16} className="mr-2" />
                      View {item.name}
                    </Link>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <dropdownItem.icon size={16} className="mr-2" />
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && !collapsed && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-6 flex flex-col overflow-hidden"
                    role="menu"
                    tabIndex={-1}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setActiveDropdown(null);
                        return;
                      }
                      const container = e.currentTarget as HTMLDivElement;
                      const items = Array.from(
                        container.querySelectorAll<HTMLAnchorElement>("a[role='menuitem']")
                      );
                      if (items.length === 0) return;
                      const activeEl = document.activeElement as HTMLElement | null;
                      const currentIndex = items.findIndex((el) => el === activeEl);
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % items.length : 0;
                        items[nextIndex]?.focus();
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        const prevIndex = currentIndex >= 0 ? (currentIndex - 1 + items.length) % items.length : items.length - 1;
                        items[prevIndex]?.focus();
                      }
                    }}
                  >
                    {/* Parent section link at top for navigation */}
                    <Link
                      to={item.path}
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => setActiveDropdown(null)}
                      role="menuitem"
                      tabIndex={0}
                    >
                      <item.icon size={16} className="mr-2" />
                      View {item.name}
                    </Link>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                        role="menuitem"
                        tabIndex={0}
                      >
                        <dropdownItem.icon size={16} className="mr-2" />
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
         <button
        onClick={() => navigate('/')}
        className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
      </motion.nav>
    </div>
  );
};
