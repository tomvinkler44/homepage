import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We're here to help with any questions you might have
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start space-x-4 mb-8">
              <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Email Us</h2>
                <p className="text-gray-600 mb-4">
                  For questions about membership, partnerships, or any other inquiries, please email us at:
                </p>
                <a 
                  href="mailto:firstcontact@hirello.com"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  firstcontact@hirello.com
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-lg font-semibold mb-4">What to expect:</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• We typically respond within 24 hours during business days</li>
                <li>• For urgent matters, please include "Urgent" in your subject line</li>
                <li>• Be sure to include any relevant account information in your message</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}