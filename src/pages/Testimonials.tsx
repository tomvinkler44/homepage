import React from "react";
import { Star, Gem } from "lucide-react";
import verifiedProfile from "./../../public/assests/images/verified-profile-icon.png";
import LikeIcon from "./../../public/assests/images/Like.svg";
import QuoteImg from "./../../public/assests/images/quote-img.svg";
import ClientImg1 from "./../../public/assests/images/client-1.png";
import ClientImg2 from "./../../public/assests/images/client-2.png";
import ClientImg3 from "./../../public/assests/images/client-3.png";
import ClientImg4 from "./../../public/assests/images/client-4.png";
import ClientImg5 from "./../../public/assests/images/client-5.png";
import ClientImg6 from "./../../public/assests/images/client-6.png";
import Boy1 from "./../../public/assests/images/boy1.png";
import Boy2 from "./../../public/assests/images/boy2.png";
import Boy3 from "./../../public/assests/images/boy3.png";
import Boy4 from "./../../public/assests/images/boy4.png";
import Boy5 from "./../../public/assests/images/boy5.png";
import Boy6 from "./../../public/assests/images/boy6.png";
import Boy7 from "./../../public/assests/images/boy7.png";
import Boy8 from "./../../public/assests/images/boy8.png";
import Boy9 from "./../../public/assests/images/boy9.png";
import Boy10 from "./../../public/assests/images/boy10.png";
import Boy11 from "./../../public/assests/images/boy11.png";
import Boy12 from "./../../public/assests/images/boy12.png";
import Boy13 from "./../../public/assests/images/boy13.png";
import Boy14 from "./../../public/assests/images/boy14.png";
import Boy15 from "./../../public/assests/images/boy15.png";
import Boy16 from "./../../public/assests/images/boy16.png";
import Boy17 from "./../../public/assests/images/boy17.png";
import Boy18 from "./../../public/assests/images/boy18.png";
import Boy19 from "./../../public/assests/images/boy19.png";
import Boy20 from "./../../public/assests/images/boy20.png";
import Girl1 from "./../../public/assests/images/Girl1.png";
import Girl2 from "./../../public/assests/images/Girl2.png";
import Girl3 from "./../../public/assests/images/Girl3.png";
import Girl4 from "./../../public/assests/images/Girl4.png";
import Girl5 from "./../../public/assests/images/Girl5.png";
import Girl6 from "./../../public/assests/images/Girl6.png";
import Girl7 from "./../../public/assests/images/Girl7.png";


const testimonials = [
  {
    name: "RUSSELL BRUNSON",
    title: "FOUNDER CLICKFUNNELS",
    content: `I love Ryan Lee. He's <b class="text-black">masterful at creating super-fast digital lifestyle businesses and continuity income-</b> and truly cares about serving his tribe with warmth, kindness and humor.`,
    image: ClientImg1,
  },
  {
    name: "RYAN DEISS",
    title: "FOUNDER: DIGITAL MARKETER",
    content: `When I held my first marketing event over 15 years ago, Ryan Lee was the first guy I brought in to teach 'continuity Income. <b class="text-black">There's no one with a longer, more impressive track record of recurring revenue than that "other" Ryan.</b>`,
    image: ClientImg2,
  },
  {
    name: "JOHN LEE DUMAS",
    title: "PODCAST PIONEER, HOST OF ENTREPRENEUR ON FIRE",
    content: `<b class="text-black">Ryan Lee is the guy who guided my membership and continuity programs.</b> I listened to him when I launched my first continuity program and it worked like crazy. In fact, it's still paying off 10 years later`,
    image: ClientImg3,
  },
  {
    name: "MIKE MICHAELOWICZ",
    title: "BEST-SELLING AUTHOR OF PROFIT FIRST",
    content: `Ryan Lee is entrepreneurial genius blended kindness and generosity. He is <b class="text-black">my go to source for sucess with soul</b> and should be yours too.`,
    image: ClientImg4,
  },
  {
    name: "CATHY MORENZIE",
    title: "FOUNDER WEIGHT LOSS GOD'S WAY",
    content: `When I built my membership and community for Weight Loss for Christian Women, Ryan Lee gave me all the tools to make it happen. <b class="text-black">If you want to help others while living your dream life-you must listen to everything Ryan teaches</b> He always delivers the goods!`,
    image: ClientImg5,
  },
  {
    name: "JONATHAN FIELDS",
    title: "AWARD-WINNING AUTHOR, PRODUCER, HOST OF GOOD LIFE PROJECT",
    content: `Ryan has the service-drive heart of an educator, the strategic and operating chops of a seasoned multi-company founder, and the hard-earned insights of a creator who understands not only the value of what he's building, but also the life he wants to live`,
    image: ClientImg6,
  },
];

const reviews = [
  {
    name: "Samir A.",
    image: Boy20,
    quote: "HIRED!!!!!!!!!",
  },
  {
    name: "Evan P.",
    image: Boy1,
    quote: "To be honest, I was a bit skeptical, but the price seemed reasonable—and boy am I glad I tried it! Hirello helped me structure my approach, which I didn’t realize I needed until I saw it in action. The sheer amount of helpful content for the price is amazing. It’s like having a professional career coach, a suite of tools, AI, training, and mock interviews—all broken into bite-sized daily tasks. Everything you need is there; just follow the plan! I’m thrilled to say I landed a great job on Day 43. Thank you, Hirello!"
  },
  {
    name: "Nathalie J.",
    image: Girl1,
    quote: "Before Hirello, I was overwhelmed by endlessly sending applications with no clear strategy. The personalized coaching sessions helped me identify and strengthen weak areas, and I quickly learned how to tailor my résumé and discover alternate roles I was suited for. The AI tools were awesome and saved me a ton of time. I’d definitely recommend Hirello—and use it again."
  },
  {
    name: "Madison M.",
    image: Boy2,
    quote: "Super happy with the value I got from Hirello! Their day-by-day action plan kept me organized and motivated, and the résumé optimizer improved my profile so much that I honestly felt more confident. Within a month I was landing far more—and higher-quality—interviews. Really appreciate it!"
  },
  {
    name: "Owen R.",
    image: Boy3,
    quote: "I wasn’t sure this was right for me—I'm a seasoned professional—but at that price I figured, why not? I was shocked by how much I got. Easily worth hundreds of dollars."
  },
  {
    name: "Dana L.",
    image: Boy4,
    quote: "I was hesitant to rely on an online career solution, but Hirello exceeded my expectations. The advanced AI coaching gave me practical tips that significantly boosted my interview performance. I loved the daily videos, job-search tips, and challenges. Best of all, I got hired!"
  },
  {
    name: "Brianna S.",
    image: Boy5,
    quote: "Hirello’s 30-day course completely changed my job-search approach. The personalized insights showed me which skills to highlight and how to communicate them. Their step-by-step plan kept me on track, and I saw measurable improvements in my application success rate within a week. Now I know that even if I’m laid off again, finding another job won’t be an issue. Cool experience overall."
  },
  {
    name: "George T.",
    image: Boy6,
    quote: "With Hirello, I finally had a streamlined process that made sense. Their AI combined with daily checklists kept me accountable, and after months of crickets I finally started getting interviews."
  },
  {
    name: "Hannah K.",
    image: Boy7,
    quote: "Hirello was life-changing during my career transition. The intuitive coaching and detailed résumé feedback helped me position myself as a strong candidate, and the interview simulations boosted my confidence. Every interaction felt designed for my success."
  },
  {
    name: "Derek F.",
    image: Boy8,
    quote: "Hirello was essential in my career transition. The interactive coaching sessions and detailed résumé feedback were both practical and motivating. Every feature was designed to deliver real-world results in a competitive market. I’ve seen a big improvement in my interview performance and overall prospects."
  },
  {
    name: "Ian D.",
    image: Boy9,
    quote: "Before signing up I compared several programs. This was not only the most affordable—it was the best of the bunch. It had everything I needed."
  },
  {
    name: "Jasmine W.",
    image: Girl2,
    quote: "I struggled to get noticed in a competitive market, but Hirello changed that. The platform guided me through résumé enhancements, LinkedIn optimizations, and simulated interviews. Each step added up, and now I’m fielding offers from awesome companies. Thank you!"
  },
  {
    name: "Marcus J.",
    image: Boy10,
    quote: "Hirello helped me focus on what matters. I used to spend all day applying with no results. Their clear plan and reminders landed me five interviews and a fantastic offer. Thanks, Hirello!"
  },
  {
    name: "Nina R.",
    image: Girl3,
    quote: "When I started using Hirello, I was drowning in uncertainty. The platform walked me through creating an impactful résumé and gave me hands-on interview practice that boosted my confidence. The daily to-do lists kept me accountable, and the supportive tone made everything less daunting."
  },
  {
    name: "Oliver B.",
    image: Boy16,
    quote: "Totally recommend it. The job search was overwhelming, but Hirello gave me structure and confidence."
  },
  {
    name: "Samantha K.",
    image: Girl5,
    quote: "Although my résumé was strong, the Skill-Gap Analyzer showed me exactly where I needed to focus to reach the next level."
  },
  {
    name: "Emily S.",
    image: Girl6,
    quote: "I thought my elevator pitch was sharp, but Hirello’s Pitch Perfector polished it even further—while still letting me sound like myself."
  },
  {
    name: "Rachel H.",
    image: Girl7,
    quote: "I figured I knew everything about job hunting—I’d read the books—but Hirello’s tips eventually landed me a job. They exceeded my expectations."
  },
  {
    name: "Quentin H.",
    image: Boy11,
    quote: "I found Hirello when I desperately needed structure. The platform guided me through every step. I got a great offer and I’m taking it!"
  },
  {
    name: "Morgan K.",
    image: Boy12,
    quote: "My résumé is 100 % better—I know because I’m actually getting callbacks and interviews now!"
  },
  {
    name: "Nicole S.",
    image: Boy13,
    quote: "AI Alex was surprisingly helpful—great advice every time, even for salary negotiations. I didn’t get much more, but I did get more than the initial offer, so I’m happy."
  },
  {
    name: "Kendra L.",
    image: Boy14,
    quote: "I appreciated every feature on the dashboard—they all helped."
  },
  {
    name: "Lucas V.",
    image: Boy15,
    quote: "Hirello streamlined my entire job-search process. With its effective résumé builder and insightful interview simulations, I felt more prepared and confident every day. The daily progress reports and reminders kept me accountable, ensuring I never missed a step. I only got to Day 24—because that’s when I landed my offer."
  },
  {
    name: "Priya D.",
    image: Girl4,
    quote: "I loved how Hirello’s simple suggestions improved my networking without making me feel pushy."
  },
  {
    name: "Jake L.",
    image: Boy17,
    quote: "Hirello’s coaching added just the right amount of polish to my interview prep."
  },
  {
    name: "Umar W.",
    image: Boy18,
    quote: "Before Hirello, my job search felt totally overwhelming. Their system not only optimized my résumé but also provided a detailed roadmap to follow. The blend of tech and human insight boosted my interview skills and confidence—and above all, I got a job!"
  },
  {
    name: "Vanessa J.",
    image: Boy19,
    quote: "Treating the job search like a project, as Hirello suggested, made a huge difference. Five weeks later I met my deadline—landed the exact job I wanted. Thanks, Hirello!"
  },
];

export default function Testimonials() {
  return (
    <div className="pt-28 md:pt-32">
      <div className="bg-white pb-10 md:pb-12 border-b border-[#cacaca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-x-[132px] md:gap-x-[50px] gap-x-10 md:gap-y-[100px] gap-y-[90px] pt-6 lg:pb-[50px] pb-10">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9e8e9] rounded-3xl text-center px-4 pt-10 pb-[60px] relative flex flex-col gap-2 min-h-[350px]"
              >
                <div className="absolute left-1/2 translate-x-[-50%] xl:top-[-24px] top-[-20px] xl:w-[70px] w-[60px]">
                  <img
                    src={QuoteImg}
                    alt="Quote-Img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="xl:w-6 w-5 xl:h-6 h-6 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <blockquote
                  className="text-[#3d3d3d] flex-1"
                  dangerouslySetInnerHTML={{ __html: `"${item.content}"` }}
                />
                <div>
                  <h3 className="uppercase font-semibold text-black text-base">
                    {item.name}
                  </h3>
                  <h6 className="uppercase text-[#3d3d3d] text-sm">
                    {item.title}
                  </h6>
                </div>
                <div className="overflow-hidden bg-gradient-to-r from-[#ae915c] to-[#f1d789] p-0.5 xl:w-[100px] w-20 xl:h-[100px] h-20 rounded-full absolute xl:bottom-[-50px] bottom-[-40px] left-1/2 translate-x-[-50%]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-x-8 sm:gap-y-8 gap-y-6">
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="flex gap-2">
                  <div className="relative flex flex-col items-center">
                    <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                      <img
                        src={review.image}
                        alt="Client-Img"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="relative">
                      <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                        <div className="flex items-center gap-1">
                          <h6 className="text-sm font-semibold text-black">
                            {review.name}
                          </h6>
                        </div>
                        <p className="text-xs text-black">
                          {review.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div>
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg1}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="w-px h-full bg-gray-200 block"></span>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                      </div>
                      <p className="text-xs text-black">
                        Today was on fire! So much awesome infol
                      </p>
                    </div>
                    <div className="absolute right-0 -bottom-2 bg-white shadow-lg rounded-full p-0.5 flex items-center gap-1">
                      <img src={LikeIcon} alt="Like-Img" className="w-4" />
                      // {/* <span className="text-sm text-black">1</span> 
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="capitalize text-xs text-black"
                    >
                      like
                    </button>
                    <button
                      type="button"
                      className="capitalize text-xs text-black"
                    >
                      replay
                    </button>
                    <span className="text-gray-500 text-xs">1w</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg2}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                      </div>
                      <p className="text-xs text-black">
                        Straightforward, sme, and from the heart you could not
                        ask for a better corne-plenty of fantastic content and
                        real world examples Ryan is the master, and a great guy
                        on top of a Highly recommended
                      </p>
                    </div>
                    <div className="absolute right-0 -bottom-2 bg-white shadow-md rounded-xl p-px px-1 flex items-center gap-1">
                      <img src={LikeIcon} alt="Like-Img" className="w-4" />
                      <span className="text-sm text-black">2</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="capitalize text-xs text-black"
                    >
                      like
                    </button>
                    <button
                      type="button"
                      className="capitalize text-xs text-black"
                    >
                      replay
                    </button>
                    <span className="text-gray-500 text-xs">1w</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg3}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="w-px h-full bg-gray-200 block"></span>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Gem className="w-3 h-3 text-gray-500" />
                        <span className="">Top fun</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                      </div>
                      <p className="text-xs text-black">
                        you always deliver ryan. I put you up there with all the
                        marketing greats, ke sath godin, brian kurty, john
                        carton, kevin mgers and on and on. be yourselt be
                        honest, have good offers, and the rest will take care of
                        itself so glad i signed up for nano
                      </p>
                    </div>
                    <div className="absolute right-0 -bottom-2 bg-white shadow-lg rounded-full p-0.5 flex items-center gap-1">
                      <img src={LikeIcon} alt="Like-Img" className="w-4" />
                      {/* <span className="text-sm text-black">1</span> 
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="capitalize text-xs text-black"
                    >
                      like
                    </button>
                    <button
                      type="button"
                      className="capitalize text-xs text-black"
                    >
                      replay
                    </button>
                    <span className="text-gray-500 text-xs">1w</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg5}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                      </div>
                      <p className="text-xs text-black">
                        Every class was concise, precise, and well-thought-out.
                        Ryan Lee over-delivered on awhide removing tons of the
                        overwhelm that can come with building and growing an
                        asine business manolicious
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg6}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                        <button
                          type="button"
                          className="text-sm text-blue-600 font-semibold ml-1"
                        >
                          Follow
                        </button>
                      </div>
                      <p className="text-xs text-black">
                        NOICE-The prin EXPERT LEVEL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg6}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                        <span className="text-sm text-blue-600 font-semibold">
                          <img
                            src={verifiedProfile}
                            alt="verified-profile-icon"
                            className="w-4 h-4"
                          />
                        </span>
                      </div>
                      <p className="text-xs text-black">
                        NOICE-The prin EXPERT LEVEL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:gap-y-8 gap-y-6">
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg6}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                        <span className="text-sm text-blue-600 font-semibold">
                          <img
                            src={verifiedProfile}
                            alt="verified-profile-icon"
                            className="w-4 h-4"
                          />
                        </span>
                      </div>
                      <p className="text-xs text-black">
                        NOICE-The prin EXPERT LEVEL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ml-3">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg1}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                        <span className="text-sm text-blue-600 font-semibold">
                          <img
                            src={verifiedProfile}
                            alt="verified-profile-icon"
                            className="w-4 h-4"
                          />
                        </span>
                      </div>
                      <p className="text-xs text-black">
                        NOICE-The prin EXPERT LEVEL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:gap-y-8 gap-y-6">
              <div className="flex gap-2 ml-3">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg6}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="w-px h-full bg-gray-200 block"></span>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-base font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                      </div>
                      <p className="text-sm text-black">
                        Better than any 2k course I've taken.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-8 w-7 sm:min-h-8 min-h-7 sm:h-8 h-7 rounded-full overflow-hidden">
                    <img
                      src={ClientImg1}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                        <button
                          type="button"
                          className="text-sm text-blue-600 font-semibold ml-1"
                        >
                          Follow
                        </button>
                      </div>
                      <p className="text-xs text-black">
                        NOICE-The prin EXPERT LEVEL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ml-3">
                <div className="relative flex flex-col items-center">
                  <div className="sm:w-10 w-8 sm:min-h-10 min-h-8 sm:h-10 h-8 rounded-full overflow-hidden">
                    <img
                      src={ClientImg1}
                      alt="Client-Img"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <div className="relative">
                    <div className="bg-[#f1f2f6] rounded-xl py-2 px-2 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <h6 className="text-sm font-semibold text-black">
                          Jessica Threlkeld
                        </h6>
                      </div>
                      <p className="text-xs text-black">
                        NOICE-The prin EXPERT LEVEL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
