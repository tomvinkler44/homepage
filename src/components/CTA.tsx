import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <div className="bg-[#1a365d] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 opacity-90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Can You Really Afford to Keep Submitting Endless Applications?
        </motion.h2>
        <motion.p
          className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          While you're spending hours sending applications into the void, other
          job seekers are landing interviews using proven strategies that
          actually work. Isn't it time to learn how to job hunt properly?
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center flex-wrap items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="/pricing"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-xl text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(234, 88, 12, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-6 h-6" />
            Start Job Hunting Smarter
          </motion.a>
          <motion.a
            href="/demo"
            className="bg-blue-700 text-white px-8 py-5 rounded-lg text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See How It Works
          </motion.a>
        </motion.div>
        <motion.div
          className="text-green-400 mt-8 font-semibold text-lg flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Sparkles className="w-5 h-5" />
          60 Day Job Guarantee
          <Sparkles className="w-5 h-5" />
        </motion.div>
      </div>
    </div>
  );
}
