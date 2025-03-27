import { BriefcaseIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed-header border-b border-gray-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 font-heading">
                Job in 30 Days
              </span>
            </motion.div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg-blue text-white px-6 py-2 rounded-lg hover:opacity-90 transition shadow-soft button-hover"
            >
              Let's Get Me Hired
            </motion.button>
            <motion.a
              href="https://blog.hirello.ai"
              className="text-gray-600 hover:text-gray-900 transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Blog
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}
