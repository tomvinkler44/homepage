import {
  AlertTriangle,
  Users,
  Target,
  BrainCircuit,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";
import YtPlayer from "./YtPlayer";

const problems = [
  {
    icon: Users,
    title: "Everyone Else Has a Built-In Advantage",
    description:
      "Hiring managers prioritize friends-of-friends and employee recommendations first. If you're just applying cold, you're automatically behind everyone who has an inside contact.",
  },
  {
    icon: Target,
    title: "You're Competing With 400+ Applicants",
    description:
      "For every online posting, companies receive hundreds of resumes. Even if you're a great fit, your application gets lost in the pile.",
  },
  {
    icon: BrainCircuit,
    title: "More People Are Using AI to Polish Résumés",
    description:
      "Hiring managers face an even tougher time sifting through nearly flawless applications - making it harder than ever for genuinely great candidates to stand out.",
  },
  {
    icon: ClipboardList,
    title: "You Have No Clear Plan or Structure",
    description:
      "Without a proven system to follow, you're wasting time on low-value activities with no results to show for it.",
  },
];

export default function Problem() {
  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      playlist: "fO8mxSXxbhU",
      loop: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="bg-gray-50 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="block sm:grid md:grid-cols-2 gap-16 items-start">
          {/* Left Section: Problems List */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-4xl font-bold text-red-500">
                Your Job Search Isn't Working Because...
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              When the economy is booming, job boards work great. You apply, get
              interviews, and pick your offers. But that's not today's reality.
            </p>

            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="flex gap-6 bg-white p-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Section: Sticky Video */}
          <div
            className="relative h-full rounded-2xl py-5 px-5 md:px-15 lg:px-28 mt-5 sm:mt-0"
            style={{
              background: "linear-gradient(135deg, #4e5a74 0%, #60a5fa 100%)",
            }}
          >
            <div className="sticky top-24">
              <h3 className="text-3xl font-medium mb-4 text-white">
                What Really Happens To Your Resume... 😊
              </h3>
              <YtPlayer videoId={"fO8mxSXxbhU"} opts={opts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
