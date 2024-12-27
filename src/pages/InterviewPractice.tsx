import { Bot, Brain, Clock, Target, Shield } from "lucide-react";
import VideoSection from "../components/VideoSection";
import { Link } from "react-router-dom";

export default function InterviewPractice() {
  const benefits = [
    {
      icon: Clock,
      title: "Practice Anytime, Anywhere",
      description:
        "No need to coordinate schedules or find a practice partner. Get instant feedback 24/7.",
    },
    {
      icon: Brain,
      title: "AI-Powered Feedback",
      description:
        "Receive detailed, objective feedback on your responses, body language, and speaking patterns.",
    },
    {
      icon: Target,
      title: "Industry-Specific Questions",
      description:
        "Practice with questions tailored to your industry and role, from behavioral to technical topics.",
    },
    {
      icon: Shield,
      title: "Safe Learning Environment",
      description:
        "Build confidence in a judgment-free zone where you can make mistakes and learn from them.",
    },
    {
      icon: Bot,
      title: "Personalized Coaching",
      description:
        "Get customized tips and suggestions based on your performance and improvement areas.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Your Interview Skills with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Practice with our AI-powered interview coach and get personalized
            feedback to improve your performance
          </p>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">See How It Works</h2>
            <p className="text-xl text-gray-600">
              The Only Proven Step-by-Step System Developed by Top Recruiters
              and Career Coaches
            </p>
          </div>
          <VideoSection link="https://www.youtube.com/embed/zkxu_lxNU-g" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Practice with AI?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gray-50 rounded-xl"
              >
                <benefit.icon className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Ace Your Interviews?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start practicing with our AI interview coach today and build the
            confidence you need to succeed.
          </p>
          <Link
            to="/pricing"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Let's do this
          </Link>
        </div>
      </section>
    </div>
  );
}
