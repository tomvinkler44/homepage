import CompanyLogos from "../components/CompanyLogos";
import CTA from "../components/CTA";
import FAQSection from "../components/FAQSection";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Results from "../components/Results";
import Solution from "../components/Solution";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Results />
      <CompanyLogos />
      <Testimonials />
      <Features />
      <Problem />
      <Solution />
      <section className="py-10 md:py-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </section>
      <CTA />
    </>
  );
}
