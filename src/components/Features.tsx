import {
  BriefcaseIcon,
  UserIcon,
  CalendarIcon,
  MessageSquareIcon,
  SearchIcon,
  BarChartIcon,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const features = [
  {
    icon: UserIcon,
    title: "30 Day Action Plan",
    description:
      "Follow our proven, step-by-step system with daily tasks and video lessons designed to get you hired  ASAP.",
  },
  {
    icon: BriefcaseIcon,
    title: "Resume Optimizer",
    description:
      "Our AI analyzes your resume on 19 critical factors that hiring managers and ATS systems look for.",
  },
  {
    icon: CalendarIcon,
    title: "AI Practice Interviews",
    description:
      "Practice with our AI interviewer and get real-time feedback on your answers to dramatically improve your performance.",
  },
  {
    icon: MessageSquareIcon,
    title: "Outreach Templates",
    description:
      "Use our high-converting message templates to connect with hiring managers and bypass applications.",
  },
  {
    icon: SearchIcon,
    title: "Hidden Job Market Access",
    description:
      "Learn how to tap into the 80% of jobs that are never posted online and reduce competition.",
  },
  {
    icon: BarChartIcon,
    title: "Outreach Manager",
    description:
      "Track target companies, key contacts, and your next networking actions. Stay organized and focused on landing your next role.",
  },
];

export default function Features() {
  return (
    <div className="gradient-bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Take Control of Your Job Search
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive 360 degree solution gives all the tools and
              support you need to succeed
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={index} className="h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full bg-white rounded-xl p-4 md:p-8 shadow-soft hover:shadow-hover card-hover"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 md:mb-4 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
