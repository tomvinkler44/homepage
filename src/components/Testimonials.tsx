import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "After submitting over 300 applications resulting in one interview (which lled nowhere), I was ready to give up. This system helped me completely revamp my approach. Within 4 weeks, I had 5 interviews lined up, and two of them actually led to offers. Google was the obvious choice 🙂  The interview practices really helped, I think my resume also became a lot better after a few rounds with Hirello’s AI.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Technical Project Manager",
    company: "Pinterest",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "I was stuck in an endless cycle of applying through job boards and hearing nothing back. Following this program I was able to figure out how to build connections and eventually one of these turned into a referral, which turned into an interview, then an offer. The outreach templates and hidden job market strategies led to conversations that never would have happened otherwise. I think without Hirello’s system I would still be submitting applications after application.",
  },
  {
    name: "Emily Thompson",
    role: "Product Manager",
    company: "undisclosed",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    quote:
      "After 8 months of frustrating job searching and one failed interview after another, I didn’t know how to keep the hope alive. But the 30 day program made a lot of sense, I tried to follow it best I could. And the structured interview prep made a big difference. I went from constant rejections to passing 3 second round interviews and finally one job offer.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Real People, Real Results</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our members are saying
            about their experience.
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
