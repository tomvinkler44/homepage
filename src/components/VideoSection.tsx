import React from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden mx-auto max-w-4xl my-12">
      <div className="aspect-w-16 aspect-h-9">
        {/* Placeholder until the actual video is ready */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="text-center">
            <button className="bg-blue-600 text-white p-4 rounded-full mb-4 hover:bg-blue-700 transition-colors">
              <Play className="h-8 w-8" />
            </button>
            <p className="text-white text-lg">Watch Demo Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}