import React from 'react';
import { CheckCircleIcon } from 'lucide-react';

const solutions = [
  {
    title: "A Clear Daily Action Plan",
    description: "Know exactly what to do each day with our structured 30-day program that eliminates guesswork."
  },
  {
    title: "AI-Powered Tools That Work",
    description: "Our resume optimizer analyzes your resume on 19 critical factors that hiring managers and ATS systems look for."
  },
  {
    title: "Bypass The Application Black Hole",
    description: "Get our proven strategies to connect directly with decision-makers, completely bypassing the traditional application process."
  },
  {
    title: "Interview Preparation That Gets Results",
    description: "Practice with our AI interviewer and get feedback that will dramatically improve your performance."
  }
];

export default function Solution() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className='flex justify-center'>
            <img 
              src="/assests/images/hiring-process.png" 
              alt="Job search success"
              className='h-[500px] md:h-[576px]'
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-green-500 mb-6">
              There's A Better Way To Get Hired
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              <strong>Proper Job Hunting is NOT about submitting endless job applications on the job boards.</strong> Top recruiters know that only 20% of jobs are filled through job boards. 
              The other 80% are filled through methods that most job seekers never learn.
            </p>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}