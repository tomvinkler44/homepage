import { ArrowRight } from "lucide-react";
import VideoSection from "../components/VideoSection";
import JourneyCarousel from "../components/JourneyCarousel";
import FAQSection from "../components/FAQSection";
import JobFindImage from "../assests/images/homepage.png"

export default function Program() {
  const programFaqs = [
    {
      question:
        "Can I use the program if I'm not currently looking for a job but want to prepare for future opportunities?",
      answer:
        "Yes, the program is beneficial for anyone who wants to improve their job search skills, build their network, and prepare for future career opportunities.",
    },
    {
      question: "Is it realistic to find a job in 30 days?",
      answer:
        "While the job market varies, the program focuses on building a strong foundation and leveraging the hidden job market to significantly increase your chances of finding a job quickly.",
    },
    {
      question: "How does the AI coach help in the job search?",
      answer:
        "The AI coach provides 24/7 support, guidance, and feedback on your job search activities, including resume optimization, LinkedIn profile enhancement, and interview practice. You can ask anything from Alex and with his specialized knowledge he will be able to help with almost any issue you might be facing.",
    },
    {
      question: "How does the Task Management platform work?",
      answer:
        "It provides a structured 30-day plan with daily tasks and subtasks to keep you organized and on track in your job search. In addition you can also add tasks for yourself and treat it as an advanced task management system. It even has an optional time tracker to make sure you stay efficient.",
    },
    {
      question: "What if I can't get a job in 30-days?",
      answer:
        "The program encourages you to continue building your network, refining your skills, and staying proactive in your job search even after the 30 days are over. While the program is designed to significantly accelerate your job search and help you land a job quickly, the job market can be unpredictable, and finding the perfect role sometimes takes a bit longer. That's why we offer a 60-day job guarantee for our Pro Plan. If you diligently complete the program, actively apply the strategies, and still haven't received a job offer within 60 days, we'll refund your Pro Plan subscription fee in full.",
    },
    {
      question: "Why should I keep my subscription after 30 days?",
      answer: (
        <div className="space-y-4">
          <p>
            Even if you haven't landed a job within the first 30 days,
            maintaining your "Job in 30 Days" subscription offers valuable
            benefits:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Continued AI Coach Access:</strong> Receive personalized
              guidance and feedback even after the initial 30 days.
            </li>
            <li>
              <strong>Unlimited Tool Usage:</strong> Keep leveraging AI-powered
              tools for resume optimization, cover letter generation, LinkedIn
              profile enhancement, and interview practice.
            </li>
            <li>
              <strong>Stay Updated:</strong> Access the latest resources, tips,
              and strategies for the ever-evolving job market.
            </li>
            <li>
              <strong>Community Support:</strong> Remain connected to the
              community forum for peer support and shared insights.
            </li>
            <li>
              <strong>New Features & Updates:</strong> Benefit from ongoing
              platform updates, including new tools and AI capabilities.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What happens if I miss a day and don't complete the task?",
      answer:
        "No worries! The program is designed to be flexible. You can catch up on missed tasks later or adjust your pace as needed. The most important thing is to stay consistent and engaged with the program overall.",
    },
    {
      question:
        "I don't have a resume. Can the program help me create one from scratch?",
      answer:
        "Absolutely! Our AI-powered resume builder can help you create a professional resume from scratch, even if you have no prior experience. Just input your work history and skills, and the AI will generate a tailored resume for you.",
    },
    {
      question: "Can I use the program on my phone or tablet?",
      answer:
        'Yes, the "Job in 30 Days" program is accessible on any device with an internet connection, including smartphones, tablets, and laptops. We are currently working on developing a dedicated mobile app for even greater convenience and accessibility. However, even now you can register for notifications, so you are kept in the loop.',
    },
    {
      question: "What if I need more help with a specific task?",
      answer:
        'Our AI assistant, Alex, is available 24/7 to answer your questions, provide clarification, and offer guidance on any task within the program. Just click the "Discuss" button on the task page to start a conversation.',
    },
    {
      question:
        "Can I customize the program to fit my specific needs or career goals?",
      answer:
        "While the program follows a structured 30-day plan, you can adjust your pace and focus on the tasks most relevant to your goals. You can also use the AI assistant to get personalized advice and support tailored to your situation.",
    },
    {
      question:
        "What if I can't commit to 30 days or if I'm just job searching part-time?",
      answer:
        "That's perfectly fine! While the program is designed for 30 days, you can adjust the pace to fit your schedule. Focus on quality over quantity, and complete tasks thoroughly even if it takes longer. Even if you're job searching part-time, the program's structured approach and AI tools can significantly increase your efficiency and effectiveness. You'll gain valuable skills and insights that will benefit your search regardless of the timeframe.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your 30-Day Journey to Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Unlock your full potential with a proven step-by-step roadmap to
              your dream job
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              Let's Do This
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              See The Program in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how our program helps you land your dream job in just 30
              days
            </p>
          </div>
          <VideoSection />
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your 30-Day Journey
          </h2>
          <JourneyCarousel />
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Land your Dream Job in 30 days
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A structured program with comprehensive task management and 24/7
                AI coaching to guide you every step of the way.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Master the Art of "Warm Applications"
                </h3>
                <p className="text-gray-600">
                  Learn tactful and effective ways to leverage your network for
                  referrals, recommendations, and insider information, giving
                  you a significant advantage over other applicants.
                </p>
                <h3 className="text-xl font-semibold">
                  Accelerate Your Job Search
                </h3>
                <p className="text-gray-600">
                  Don't waste months on ineffective strategies. Our structured
                  30-day program provides a clear roadmap and personalized
                  guidance to get that job faster.
                </p>
              </div>
            </div>
            <div className="relative d-flex justify-start items-center">
              <img
                style={{ height: "400px", width: 'auto' }}
                src={JobFindImage}
                alt="Job search success"                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive FAQ
          </h2>
          <FAQSection faqs={programFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our program today and take the first step towards landing your
            dream job.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
