import React from "react";
import {
  BriefcaseIcon,
  Youtube,
  Linkedin,
  GitBranch as BrandTiktok,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <BriefcaseIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">
                Job in 60 Days
              </span>
            </div>
            <p className="text-gray-400">
              Your fast track to landing your dream job.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/program"
                  className="hover:text-white transition-colors"
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://blog.hirello.ai"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  to="/program#faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/money-back"
                  className="hover:text-white transition-colors"
                >
                  Money Back Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/hirello"
                className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110"
              >
                <Youtube className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/company/hirello"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://tiktok.com/@hirello"
                className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
              >
                <BrandTiktok className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Job in 60 Days. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
