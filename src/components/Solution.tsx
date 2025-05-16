import { motion } from "framer-motion";
export default function Solution() {
  return (
    <div className="container flex flex-col justify-center">
      <h1>There's A Better Way To Get Hired</h1>
      <h2>Stop applying. Start connecting.</h2>

      <div className="job-stats">
        <p>
          Top recruiters know that only{" "}
          <span className="stats-highlight">20%</span> of jobs are filled
          through job boards. The other{" "}
          <span className="stats-highlight">80%</span> are filled through
          methods most job seekers never learn.
        </p>
      </div>

      <div className="strategy-cards">
        <div className="strategy-card card-1">
          <svg
            className="strategy-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#fff6ed"></rect>
            <path
              d="M12 8V16M8 12H16"
              stroke="#f97316"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="strategy-title">Career Clarity</h3>
          <p className="strategy-desc">
            Define your unique professional value proposition to stand out from
            the crowd.
          </p>
        </div>

        <div className="strategy-card card-2">
          <svg
            className="strategy-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#f5f3ff"></rect>
            <path
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 10a2 2 0 01-2 2 2 2 0 100 4c.73 0 1.41-.3 1.87-.8m6.63-2.63a2 2 0 01-2.83 2.83m-1.17-6.17a2 2 0 112.83 2.83"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="strategy-title">Uncover Hidden Jobs</h3>
          <p className="strategy-desc">
            Find and pursue positions that never get publicly posted.
          </p>
        </div>

        <div className="strategy-card card-3">
          <svg
            className="strategy-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#ecfeff"></rect>
            <path
              d="M16 10l4 4m0 0l-4 4m4-4H4"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="strategy-title">Bypass Gatekeepers</h3>
          <p className="strategy-desc">
            Skip the application black hole and connect directly with hiring
            managers.
          </p>
        </div>

        <div className="strategy-card card-4">
          <svg
            className="strategy-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#fdf2f8"></rect>
            <path
              d="M13 10V3L4 14h7v7l9-11h-7z"
              stroke="#ec4899"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="strategy-title">Strategic Connections</h3>
          <p className="strategy-desc">
            Build your professional network strategically to open the right
            doors.
          </p>
        </div>

        <div className="strategy-card card-5">
          <svg
            className="strategy-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#f0fdfa"></rect>
            <path
              d="M12 22v-6m0 0H9.5M12 16h2.5M15.5 18h-7m13-7.8v-1c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C19.24 4.4 18.4 4.4 16.72 4.4H7.28c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C2.5 6.68 2.5 7.52 2.5 9.2v1c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311c.642.327 1.482.327 3.162.327h9.44c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311c.327-.642.327-1.482.327-3.162z"
              stroke="#14b8a6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="strategy-title">Interview Mastery</h3>
          <p className="strategy-desc">
            Turn interviews into job offers with high-impact storytelling
            techniques.
          </p>
        </div>

        <div className="strategy-card card-6">
          <svg
            className="strategy-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#fefce8"></rect>
            <path
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              stroke="#eab308"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12h6v10"
              stroke="#eab308"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="strategy-title">Negotiation Psychology</h3>
          <p className="strategy-desc">
            Secure the best possible salary and benefits package.
          </p>
        </div>
      </div>

      <motion.a
        href="/pricing"
        className="cta-button get-hired mx-auto"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        I'm Ready to Get Hired!
        <svg
          className="arrow-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </div>
  );
}
