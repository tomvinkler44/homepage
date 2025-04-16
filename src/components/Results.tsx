import React from "react";
import { Calendar, Users, MessageSquare, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "78%",
    description: "of members land a job within 30 days",
    icon: Calendar,
    color: "blue",
  },
  {
    number: "5X",
    description: "more interviews than traditional methods",
    icon: Users,
    color: "green",
  },
  {
    number: "92%",
    description: "interview success rate",
    icon: MessageSquare,
    color: "purple",
  },
  {
    number: "$17K",
    description: "average salary increase",
    icon: TrendingUp,
    color: "orange",
  },
];

const barColorClasses = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
};

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
};

export default function Results() {
  return (
    <div className="bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Why Hirello? <span className="text-orange-500">Results</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-soft hover:shadow-hover transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-16 h-16 ${
                    colorClasses[stat.color]
                  } rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div
                  className={`text-5xl font-bold mb-2 ${`text-${stat.color}-600`}`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.description}</div>
                <div className="mt-4 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${barColorClasses[stat.color]}`}
                    initial={{ width: "0%" }}
                    whileInView={{
                      width: stat.number.replace(/[^0-9]/g, "") + "%",
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center max-w-3xl mx-auto mt-8">
          <p className="text-xl text-gray-600">
            While other job seekers are submitting hundreds of applications with
            no response, our members are getting interviews and offers
          </p>
        </div>
      </div>
    </div>
  );
}
