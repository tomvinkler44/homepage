import VideoSection from '../components/VideoSection';

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Watch How It Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our program helps you land your dream job in just 30 days
          </p>
        </div>
        <VideoSection link="https://www.youtube.com/embed/MbyCRAZ12ow" />
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your journey to career success?
          </p>
          <a href="https://dashboard.hirello.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
}