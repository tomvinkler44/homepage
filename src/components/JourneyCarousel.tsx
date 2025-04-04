import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const journeySteps = [
  {
    title: "Days 1-3: Foundation",
    description: "Put A Strategy Together",
    details: [
      "Create your personalized job search plan",
      "Set up your tracking systems",
      "Define your target roles and companies"
    ]
  },
  {
    title: "Days 4-7: Hidden Market",
    description: "Start Unlocking The Hidden Job Market",
    details: [
      "Learn about unadvertised opportunities",
      "Build relationships with industry insiders",
      "Access exclusive job openings"
    ]
  },
  {
    title: "Week 2: Mastering Interviews",
    description: "Practice And Perfect",
    details: [
      "Master behavioral interviews",
      "Practice technical questions",
      "Perfect your elevator pitch"
    ]
  },
  {
    title: "Week 3: Application Sprint",
    description: "Execute Your Strategy",
    details: [
      "Apply to targeted positions",
      "Follow up effectively",
      "Network strategically"
    ]
  },
  {
    title: "Week 4: Closing Strong",
    description: "Seal the Deal",
    details: [
      "Navigate final interviews",
      "Master salary negotiations",
      "Choose the best offer"
    ]
  }
];

export default function JourneyCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="py-8"
      >
        {journeySteps.map((step, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white py-6 px-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-bold text-blue-600 mb-3">{step.title}</h3>
              <p className="text-lg font-semibold mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 z-10 rounded-full">
        <ChevronLeft className="h-6 w-6 text-blue-600" />
      </button>
      <button className="swiper-button-next absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 z-10 rounded-full">
        <ChevronRight className="h-6 w-6 text-blue-600" />
      </button>
    </div>
  );
}