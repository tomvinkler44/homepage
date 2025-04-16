import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-[#1E3A8A] pt-16">
      <div className="max-w-7xl m-auto pl-0 md:pl-6 lg:pl-8 py-12">
        <div className="block sm:grid md:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 sm:px-0"
          >
            <motion.a
              href="/money-back"
              className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6 guarantee-button-shadow cursor-pointer"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <span className="font-bold">60 DAY JOB GUARANTEE</span>
              <span className="mx-2">|</span>
              <span>No Job, Money Back</span>
            </motion.a>
            <h1 className="text-6xl font-bold text-white mb-6 font-heading hero-text-shadow">
              So, Your Job Search Is Not Working
            </h1>
            <p className="text-xl text-blue-100 mb-8 hero-text-shadow">
              Wanna know why? Because relying on the job boards to get a job in
              2025 is like relying on a lottery ticket to fix the low balance on
              your bank account. Sure, could work, but...
            </p>
            <div className="block m-auto sm:flex items-center gap-8">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="m-auto video-button flex items-center justify-center transition-all duration-300"
              >
                <div className="text-center text-white">
                  <PlayCircle className="w-12 h-12 mx-auto mb-2" />
                  <span className="text-sm font-semibold">
                    See How It Works
                  </span>
                </div>
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/assests/images/hero-image.png"
              alt="Job search success"
              className="drop-shadow-purple mt-5 sm:mt-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
