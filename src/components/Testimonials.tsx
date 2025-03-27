import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Fortune 500 Tech Company",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "After 6 months of sending applications into the void, I followed this system and landed my dream job in just 3 weeks. The difference was night and day.",
    achievement: "Increased salary by $45K"
  },
  {
    name: "Marcus Rodriguez",
    role: "Marketing Director",
    company: "Leading Digital Agency",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "The strategies for bypassing traditional applications and connecting directly with decision-makers are pure gold. This completely changed my job search game.",
    achievement: "Landed role in 4 weeks"
  },
  {
    name: "Emily Thompson",
    role: "Product Manager",
    company: "High-Growth Startup",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "The daily action plans and AI interview practice made all the difference. I went from getting no responses to having multiple offers to choose from.",
    achievement: "4 competing offers"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real People, Real Results
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our members are saying about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                <Quote className="w-12 h-12 text-blue-100" />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-blue-600 font-semibold">
                  {testimonial.achievement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}