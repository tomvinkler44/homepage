import React from 'react';
import { BriefcaseIcon, UserIcon, CalendarIcon, MessageSquareIcon, SearchIcon, BarChartIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const features = [
  {
    icon: UserIcon,
    title: "AI Interview Practice",
    description: "Practice with our AI interviewer and get real-time feedback on your answers to dramatically improve your performance."
  },
  {
    icon: BriefcaseIcon,
    title: "Resume Optimizer",
    description: "Our AI analyzes your resume on 19 critical factors that hiring managers and ATS systems look for."
  },
  {
    icon: CalendarIcon,
    title: "30-Day Action Plan",
    description: "Follow our proven, step-by-step system with daily tasks and video lessons designed to get you hired."
  },
  {
    icon: MessageSquareIcon,
    title: "Outreach Templates",
    description: "Use our high-converting message templates to connect with hiring managers and bypass applications."
  },
  {
    icon: SearchIcon,
    title: "Hidden Job Market Access",
    description: "Learn how to tap into the 80% of jobs that are never posted online and reduce competition."
  },
  {
    icon: BarChartIcon,
    title: "Progress Tracking",
    description: "Monitor your job search activities and results with our comprehensive tracking system."
  }
];

export default function Features() {
  return (
    <div className="gradient-bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-[#3B4F66] rounded-2xl p-12 mb-24 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-4xl font-bold mb-6 font-heading text-[#00B8D9]">
              Designed By Top Recruiters and Career Coaches
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our 30-day program isn't just another collection of generic advice. It's a proven system built by professionals who've spent decades in the trenches of hiring and career development.
            </p>
            <p className="text-xl text-blue-100">
              The strategies in our program have been refined through thousands of successful job placements and represent the collective wisdom of what actually works in today's challenging job market.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Everything You Need to Land Your Dream Job
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive system gives you all the tools and support to succeed
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-soft hover:shadow-hover card-hover"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-heading">{feature.title}</h3>
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