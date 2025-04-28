import AnimatedSection from "./AnimatedSection";

const TopRecruitersAndCareerCoaches = () => {
  return (
    <div className="gradient-bg-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-[#3B4F66] rounded-2xl p-6 md:p-12 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-4xl font-bold mb-6 font-heading text-[#00B8D9]">
              Designed By Top Recruiters and Career Coaches
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our 30-day program isn't just another collection of generic
              advice. It's a proven system built by professionals who've spent
              decades in the trenches of hiring and career development.
            </p>
            <p className="text-xl text-blue-100">
              The strategies in our program have been refined through thousands
              of successful job placements and represent the collective wisdom
              of what actually works in today's challenging job market.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TopRecruitersAndCareerCoaches;
