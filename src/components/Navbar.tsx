import { useEffect, useState } from "react";
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  const programItems = [
    { title: "Interview Practice", href: "/interview-practice" },
  ];

  return (
    <nav className="fixed-header border-b border-gray-100 shadow-soft bg-[#f4f6fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-0">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="block sm:flex items-center">
            <Link to="/" className="flex items-center justify-center">
              <img
                src="/assests/images/hirello-logo.png"
                alt="logo"
                className="h-[30px] ms-1"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsProgramOpen(true)}
              onMouseLeave={() => setIsProgramOpen(false)}
            >
              <motion.a
                href="/program"
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                Program
                <ChevronDownIcon className="h-4 w-4 ml-1 transform transition-transform group-hover:rotate-180" />
              </motion.a>
              <AnimatePresence>
                {isProgramOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-72 bg-[#0F172A] rounded-lg shadow-lg border border-gray-800 py-2 z-50"
                  >
                    {programItems.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2.5 text-gray-300 hover:text-white transition-all relative group/item"
                        whileHover={{ x: 4 }}
                      >
                        <span className="relative z-10">{item.title}</span>
                        <motion.div
                          className="absolute inset-0 bg-gray-700/20 rounded-md"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.1 }}
                        />
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.a
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Pricing
            </motion.a>
            {/* <motion.a
              href="/testimonials"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Testimonials
            </motion.a> */}
            <motion.a
              href="https://blog.hirello.ai"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Resources
            </motion.a>
            <motion.a
              href="https://dashboard.hirello.ai"
              className="px-4 py-2 bg-blue-50 rounded-lg text-blue-600 font-semibold hover:bg-blue-100 transition-colors shadow-soft"
              whileHover={{ scale: 1.05 }}
            >
              My Portal
            </motion.a>
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg-orange text-white px-6 py-2 rounded-lg hover:opacity-90 transition shadow-soft button-hover"
            >
              Lets Get Me Hired
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
              href="/program"
              className="text-gray-600 hover:text-gray-900 transition-colors block"
              whileHover={{ scale: 1.05 }}
            >
              Program
            </motion.a>
             <motion.a
              href="/interview-practice"
              className="text-gray-600 hover:text-gray-900 transition-colors block"
              whileHover={{ scale: 1.05 }}
            >
              Interview Practice
            </motion.a>
            <motion.a
              href="/pricing"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Pricing
            </motion.a>
            {/* <motion.a
              href="/testimonials"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Testimonials
            </motion.a> */}
            <motion.a
              href="https://blog.hirello.ai"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Resources
            </motion.a>
            <motion.a
              href="https://dashboard.hirello.ai"
              className="block text-center px-4 py-2 bg-blue-50 rounded-lg text-blue-600 font-semibold hover:bg-blue-100 transition-colors shadow-soft"
              whileHover={{ scale: 1.05 }}
            >
              My Portal
            </motion.a>
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full block text-center gradient-bg-orange text-white px-6 py-2 rounded-lg hover:opacity-90 transition shadow-soft button-hover"
            >
              Lets Get Me Hired
            </motion.a>
          </div>
        )}
      </div>
    </nav>
  );
}
