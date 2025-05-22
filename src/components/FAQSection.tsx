import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFaqs: FAQ[] = [
    {
      question: "How is this different from other job search programs?",
      answer: (
        <div className="space-y-4">
          <p>
            Hirello's "Job in 30 Days" program stands out in several key ways:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>AI-Powered Advantage:</strong> Our AI tools make it a
              breeze to craft outreach messages, cover letters and give you back
              hours of time, while giving you the highest quality content.
            </li>
            <li>
              <strong>Hidden Job Market Focus:</strong> Our program helps you
              tap into the unadvertised job market, where competition is less
              fierce and opportunities are more abundant.
            </li>
            <li>
              <strong>Structured Yet Flexible:</strong> Our 30-day program
              provides a clear roadmap, but you can adjust your pace and focus
              on the tasks most relevant to your goals.
            </li>
            <li>
              <strong>24/7 AI Support:</strong> Our AI coach is available
              anytime to answer your questions, offer guidance, and keep you
              motivated.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "What if I can't commit to 30 days or if I'm just job searching part-time?",
      answer: (
        <div className="space-y-4">
          <p>
            That's perfectly fine! While the program is designed for 30 days,
            you can adjust the pace to fit your schedule. Focus on quality over
            quantity, and complete tasks thoroughly even if it takes longer.
          </p>
          <p>
            Even if you're job searching part-time, the program's structured
            approach and AI tools can significantly increase your efficiency and
            effectiveness. You'll gain valuable skills and insights that will
            benefit your search regardless of the timeframe.
          </p>
        </div>
      ),
    },
    {
      question:
        "Are you going to be asking me to do more networking? Because I'm not good at it and I don't have much of a network to rely on. Will this still work?",
      answer: (
        <div className="space-y-4">
          <p>
            Yes, networking is a key component of the program. In today's
            competitive job market, simply applying to jobs online often isn't
            enough. To maximize your chances, you need to leverage your network
            and build relationships with people who can advocate for you.
          </p>
          <p>
            However, we understand that networking can be intimidating,
            especially if you're starting with a limited network. That's why we
            teach you tactful and effective ways to grow your network and get
            people to support your job search without being aggressive.
          </p>
          <p>The program provides:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Guidance on identifying and connecting with key people in your
              industry
            </li>
            <li>
              Templates and scripts for reaching out to people in a professional
              and persuasive manner
            </li>
            <li>
              Strategies for building relationships and nurturing your network
            </li>
            <li>
              Tips on how to leverage your network for referrals, introductions,
              and insider information
            </li>
          </ul>
          <p>
            Even if you're not a natural networker, this program will equip you
            with the skills and confidence to use your network effectively and
            increase your chances of landing your dream job.
          </p>
        </div>
      ),
    },
    {
      question:
        'How do I know if the "Hirello" program is right for me?',
      answer: (
        <p>
          If you're motivated to take a proactive approach to your job search,
          leverage AI-powered tools, and commit to a structured plan, then this
          program is likely a great fit for you.
        </p>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsToUse = faqs || defaultFaqs;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        {faqsToUse.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <button
              className="w-full px-4 md:px-8 py-3 md:py-6 text-left flex justify-between items-center transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-3">
                {/* Ensuring the icon stays fixed in size and properly aligned */}
                <HelpCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-lg font-semibold text-gray-900 leading-snug">
                  {faq.question}
                </span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 px-8 pb-6 text-gray-600 prose prose-blue bg-blue-50 rounded-xl">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
