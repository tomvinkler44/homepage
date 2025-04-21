import React from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "allianz", logo: "allianz_logo.png" },
  { name: "capgemini", logo: "capgemini_logo.png" },
  { name: "fujitsu", logo: "fujitsu_logo.png" },
  { name: "google", logo: "google.png" },
  { name: "honeywell", logo: "honeywell_logo.png" },
  { name: "mercedes", logo: "mercedes.png" },
  { name: "Meta", logo: "Meta.png" },
  { name: "mufg union bank", logo: "mufg_union_bank_na_logo.png" },
  { name: "workday", logo: "workday.png" },
];

export default function CompanyLogos() {
  return (
    <div className="bg-white py-10 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--secondary-color)" }}
          >
            We've Helped Our Members Land Jobs at Companies Like:
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex space-x-12 logo-scroll">
            {companies.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-none flex-col py-8 px-12 bg-gray-50 rounded-xl flex items-center justify-center min-w-[200px]"
                style={{ color: "var(--secondary-color)" }}
              >
                <img className="h-12 w-12 mb-2" src={`/assests/company-logo/${company.logo}`} alt="" />
                <span className="text-xl font-bold capitalize">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
