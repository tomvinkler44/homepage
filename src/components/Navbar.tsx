import { useEffect, useState } from "react";
import { BriefcaseIcon, MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed-header border-b border-gray-100 shadow-soft bg-[#f4f6fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-0">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="block sm:flex items-center">
            <Link to="/">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                <BriefcaseIcon className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900 font-heading">
                  Job in 30 Days - by
                </span>
              </motion.div>
            </Link>
            <Link
              to="https://dashboard.hirello.ai"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="/assests/images/hirello-logo.png"
                alt="logo"
                className="h-[30px] ms-1"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.a
              href="/interview-practice"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Interview Practice
            </motion.a>
            <motion.a
              href="/program"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Program
            </motion.a>
            <motion.a
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Pricing
            </motion.a>
            <motion.a
              href="https://dashboard.hirello.ai"
              className="px-4 py-2 bg-blue-50 rounded-lg text-blue-600 font-semibold hover:bg-blue-100 transition-colors shadow-soft"
              whileHover={{ scale: 1.05 }}
            >
              DASHBOARD
            </motion.a>
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg-blue text-white px-6 py-2 rounded-lg hover:opacity-90 transition shadow-soft button-hover"
            >
              Let's Get Me Hired
            </motion.a>
            <motion.a
              href="https://blog.hirello.ai"
              className="text-gray-600 hover:text-gray-900 transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Blog
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden h-screen text-center z-50 mt-4 space-y-4 px-2 pb-4">
            <motion.a
              href="/interview-practice"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Interview Practice
            </motion.a>
            <motion.a
              href="/program"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Program
            </motion.a>
            <motion.a
              href="/pricing"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Pricing
            </motion.a>
            <motion.a
              href="https://dashboard.hirello.ai"
              className="block text-center px-4 py-2 bg-blue-50 rounded-lg text-blue-600 font-semibold hover:bg-blue-100 transition-colors shadow-soft"
              whileHover={{ scale: 1.05 }}
            >
              DASHBOARD
            </motion.a>
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full block text-center gradient-bg-blue text-white px-6 py-2 rounded-lg hover:opacity-90 transition shadow-soft button-hover"
            >
              Let's Get Me Hired
            </motion.a>
            <motion.a
              href="https://blog.hirello.ai"
              className="block text-gray-600 hover:text-gray-900 transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Blog
            </motion.a>
          </div>
        )}
      </div>
    </nav>
  );
}
