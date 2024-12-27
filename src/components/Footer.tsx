import { Link } from "react-router-dom";
import { Briefcase, Linkedin, Youtube, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 safe-area-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Job in 30 Days</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your fast track to landing your dream job.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/program"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://hirello.ai/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  to="/program#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@TeamHirello"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors tap-target"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/hirello-ai/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors tap-target"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              {/* <a 
                href="#facebook" 
                className="text-gray-400 hover:text-white transition-colors tap-target"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
                </a> */}
              <a
                href="https://www.tiktok.com/@hirello"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors tap-target"
                aria-label="TikTok"
              >
                <Video className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Job in 30 Days. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
