import { Dot } from "lucide-react";

export default function MoneyBack() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-1 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our "No-Sweat" 60-Day Guarantee
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're so confident in the effectiveness of the Job in 30 Days Pro
              Plan that we're backing it with a 60-Day Job Guarantee.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">How It Works:</h3>
              <p className="text-gray-600">
                If you diligently complete all 30 days of the Pro Plan tasks,
                actively apply the strategies, and still haven't received a job
                offer within 60 days of starting the program, we'll refund your
                Pro Plan subscription fee in full.
              </p>
              <h3 className="text-xl font-semibold">Eligibility:</h3>
              <p className="text-gray-600">
                To be eligible for the guarantee, you must:
              </p>
              <ul className="list-none space-y-2">
                <li className="relative pl-10">
                  <Dot className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-500" />{" "}
                  <span className="text-gray-600 text-sm">
                    Complete the full 30-Day Program: This includes actively
                    engaging with the AI coach, completing daily tasks, and
                    utilizing the provided tools and resources.
                  </span>
                </li>
                <li className="relative pl-10">
                  <Dot className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-500" />
                  <span className="text-gray-600 text-sm">
                    Demonstrate Effort: Actively apply for jobs, attend
                    networking events, and follow the guidance provided in the
                    program.
                  </span>
                </li>
                <li className="relative pl-10">
                  <Dot className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-500" />
                  <span className="text-gray-600 text-sm">
                    Provide Documentation: Submit proof of your job search
                    activities, such as a list of applied jobs, networking
                    contacts, and interview follow-ups.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold">We Believe in You:</h3>
              <p className="text-gray-600">
                We understand that landing a job is a complex process influenced
                by various factors, including your experience, skills, and the
                current job market. However, we're committed to your success and
                want to provide you with the support and resources you need to
                achieve your career goals.
              </p>
              <p className="text-gray-600">
                Our 60-Day Job Guarantee is a testament to our confidence in the
                effectiveness of the Pro Plan and our dedication to helping you
                land your dream job.
              </p>
              <h3 className="text-xl font-semibold">Ready to Take the Leap?</h3>
              <p className="text-gray-600">
                Enroll in the "Job in 60 Days" Pro Plan today and embark on a
                transformative job search journey. With our comprehensive
                program, AI-powered tools, and 60-Day Job Guarantee, you have
                nothing to lose and everything to gain.
              </p>
              <h3 className="text-xl font-semibold">
                Sign up now and start your path to career success!
              </h3>
              <h3 className="text-xl font-semibold">Note:</h3>
              <ul className="list-none space-y-2">
                <li className="relative pl-10">
                  <Dot className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-500" />
                  <span className="text-gray-600 text-sm">
                    Refunds will be processed within [number] business days of
                    receiving your request and required documentation.
                  </span>
                </li>
                <li className="relative pl-10">
                  <Dot className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-blue-500" />
                  <span className="text-gray-600 text-sm">
                    For full terms and conditions, please refer to our [Terms of
                    Service/Guarantee Policy] page.
                  </span>
                </li>
              </ul>
              <h3 className="text-xl font-semibold">P.S.</h3>
              <p className="text-gray-600">
                We trust you'll be honest about your efforts, but hey, if you
                feel like pulling a fast one on us, we won't be checking your
                homework. 😉 We're all about empowering your job search, not
                policing it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
