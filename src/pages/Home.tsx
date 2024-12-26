import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Bot,
  FileText,
  MessageSquare,
  LineChart,
  Brain,
  ListChecks,
  Play,
} from "lucide-react";
import FAQSection from "../components/FAQSection";
import MoneyBackBadge from "../components/MoneyBackBadge";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDemoHovered, setIsDemoHovered] = useState(false);

  const features = [
    {
      icon: Bot,
      title: "Practice Interviewing with AI Alex",
      description:
        "Get real-time feedback and coaching on your interview responses",
    },
    {
      icon: FileText,
      title: "Cover Letters",
      description:
        "AI-powered cover letter generator customized for each application",
    },
    {
      icon: MessageSquare,
      title: "Messaging Templates",
      description: "19 different templates for every networking scenario",
    },
    {
      icon: LineChart,
      title: "Skill-Gap Analyzer",
      description: "Map your path to your dream role with actionable steps",
    },
    {
      icon: Brain,
      title: "Full-Spectrum Resume Tune-up",
      description: "AI-powered resume optimization for ATS and human readers",
    },
    {
      icon: Target,
      title: "LinkedIn Profile Transformer",
      description: "Stand out with an optimized professional presence",
    },
    {
      icon: Clock,
      title: "Day-to-Day Action Plan",
      description: "Clear, structured steps to maximize your job search",
    },
    {
      icon: ListChecks,
      title: "Application and Network Tracker",
      description: "Stay organized and never miss a follow-up",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative hero-pattern text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Land Your Dream Job in 30 Days
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100">
              The Only Proven Step-by-Step System Developed by Top Recruiters
              and Career Coaches
            </p>
            <div className="relative inline-block">
              <div className="flex justify-center space-x-4">
                <a
                  href="#get-started"
                  className="animate-slide-up inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered
                    ? "Taking You to Day 1..."
                    : "I'm Ready To Transform My Future"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/demo"
                  className={`animate-slide-up animate-slide-up-delay-1 inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all duration-300 border-2 border-white relative z-20 ${
                    isDemoHovered ? "scale-110" : ""
                  }`}
                  onMouseEnter={() => setIsDemoHovered(true)}
                  onMouseLeave={() => setIsDemoHovered(false)}
                >
                  {isDemoHovered
                    ? "How It Works - Watch Demo"
                    : "See How It Works"}
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative z-10">
                <Link to="/money-back">
                  <MoneyBackBadge />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-6">
                Tired of...
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 text-red-500">✕</div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Wasting Time
                    </h3>
                    <p className="text-gray-600">
                      Spending hours on activities that don't lead to interviews
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 text-red-500">✕</div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Feeling Lost
                    </h3>
                    <p className="text-gray-600">
                      Not knowing what to focus on each day of your job search
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 text-red-500">✕</div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Getting Ignored
                    </h3>
                    <p className="text-gray-600">
                      Sending applications into the void with no response
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                Imagine Instead...
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Clear Direction
                    </h3>
                    <p className="text-gray-600">
                      A day-by-day action plan customized for tech roles
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Maximum ROI
                    </h3>
                    <p className="text-gray-600">
                      Focus only on proven high-impact activities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Structured Success
                    </h3>
                    <p className="text-gray-600">
                      Know exactly what to do every single day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-xl mb-8">
            Join our program today and take the first step towards landing your
            dream job in just 30 days.
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Hired Faster - Start Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
