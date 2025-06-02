import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { trackPlanClick } from "../facebookPixel";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "/month",
      features: [
        { text: "Cover letter creator", subtext: "" },
        { text: "Elevator Pitches", subtext: "" },
        { text: "Skill-Gap Analysis", subtext: "" },
        { text: "Career GPS", subtext: "" },
      ],
      buttonText: "Get Started",
      buttonStyle: "secondary",
    },
    {
      name: "Basic",
      price: "27",
      period: "/month",
      quarterlyPrice: "19.95",
      quarterlyDiscount: "20%",
      features: [
        { text: "30-Day Program", subtext: "" },
        { text: "Everything in Free +", subtext: "" },
        { text: "Application Tracker", subtext: "" },
        { text: "Messaging Platform", subtext: "" },
        { text: "Task Management", subtext: "" },
      ],
      buttonText: "Upgrade",
      buttonStyle: "primary",
    },
    {
      name: "Pro",
      price: "57",
      period: "/month",
      quarterlyPrice: "29.95",
      quarterlyDiscount: "30%",
      popular: true,
      features: [
        { text: "Everything in Basic +", subtext: "" },
        { text: "Resume Optimizer", subtext: "" },
        { text: "LinkedIn Optimizer", subtext: "" },
        { text: "Interview Practice", subtext: "(6 interviews/month)" },
      ],
      buttonText: "Upgrade",
      buttonStyle: "success",
      alternateButton: {
        text: "Cancel",
        style: "secondary",
      },
    },
  ];

  const handleAddClick = (plan: { name: string; price: string; period: string; features: { text: string; subtext: string; }[]; buttonText: string; buttonStyle: string; quarterlyPrice?: undefined; quarterlyDiscount?: undefined; popular?: undefined; alternateButton?: undefined; } | { name: string; price: string; period: string; quarterlyPrice: string; quarterlyDiscount: string; features: { text: string; subtext: string; }[]; buttonText: string; buttonStyle: string; popular?: undefined; alternateButton?: undefined; } | { name: string; price: string; period: string; quarterlyPrice: string; quarterlyDiscount: string; popular: boolean; features: { text: string; subtext: string; }[]; buttonText: string; buttonStyle: string; alternateButton: { text: string; style: string; }; }) => {
    trackPlanClick(plan.name, +plan.price);

    // Redirect to Vue app's pricing page with query params
    const url = `https://dashboard.hirello.ai/pricing`;
    window.open(url, '_blank');
  };

  const coachingPlans = [
    {
      name: "Career Coaching Lite",
      price: "157",
      period: "/month",
      features: [
        { text: "Everything in Pro +", subtext: "" },
        { text: "30 minutes of Career/Job Coaching by Expert Career Coach (human)", subtext: "" },
      ],
      buttonText: "Upgrade",
      buttonStyle: "primary",
    },
    {
      name: "Career Coaching Pro",
      price: "850",
      period: "/month",
      features: [
        { text: "Everything in Pro +", subtext: "" },
        { text: "4 x 50 minutes of Comprehensive Career Coaching", subtext: "" },
      ],
      buttonText: "Upgrade",
      buttonStyle: "primary",
    },
  ];

  const standaloneProducts = [
    {
      name: "LinkedIn Optimizer",
      price: "22",
      period: "/month",
      buttonText: "Buy",
      buttonStyle: "primary",
    },
    {
      name: "Resume Optimizer",
      price: "35",
      period: "/month",
      buttonText: "Buy",
      buttonStyle: "primary",
    },
  ];

  return (
    <div className="py-28 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex justify-between flex-col ${plan.popular ? "ring-2 ring-blue-500 p-0" : "p-8"
                }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2">
                  Most Popular
                </div>
              )}
              <div className={`${plan.popular ? "p-8" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <div className="mb-6">
                  <div className="flex items-start">
                    <span className="text-sm mt-1">$</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  {plan.quarterlyPrice && (
                    <div className="mt-2 text-gray-600">
                      <span className="text-sm">$</span>
                      {plan.quarterlyPrice}
                      /month for 3 months
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <div>
                        <div>{feature.text}</div>
                        {feature.subtext && (
                          <div>{feature.subtext}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                {/* className={`text-center block w-full py-3 px-4 rounded-md font-semibold mb-2 ${
                  plan.buttonStyle === "primary"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : plan.buttonStyle === "success"
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`} */}
                {plan.popular && (
                  <button
                    className="text-center block w-full py-3 px-4 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => {
                      handleAddClick(plan)
                    }}
                  >
                    {plan.buttonText}
                  </button>
                )}
                {/* {plan.alternateButton && (
                  <button className="w-full py-3 px-4 rounded-md font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200">
                    {plan.alternateButton.text}
                  </button>
                )} */}
              </div>
              {!plan.popular && (
                <button
                  className="text-center block w-full py-3 px-4 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => {
                    handleAddClick(plan)
                  }} 
                >
                  {plan.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Career Coaching Plans */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Career Coaching Plans</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {coachingPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex justify-between flex-col p-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <div className="mb-6">
                  <div className="flex items-start">
                    <span className="text-sm mt-1">$</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <div>
                        <div>{feature.text}</div>
                        {feature.subtext && (
                          <div>{feature.subtext}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="text-center block w-full py-3 px-4 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => {
                  handleAddClick(plan)
                }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Standalone Products */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Standalone Products</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {standaloneProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex justify-between flex-col p-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <div className="mb-6">
                  <div className="flex items-start">
                    <span className="text-sm mt-1">$</span>
                    <span className="text-4xl font-bold">{product.price}</span>
                    <span className="text-gray-600 ml-1">{product.period}</span>
                  </div>
                </div>
              </div>
              <Link
                to="https://dashboard.hirello.ai/pricing"
                target="_blank"
                className="text-center block w-full py-3 px-4 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700"
              >
                {product.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Money-Back Guarantee</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you're not completely satisfied with our program within the first
            14 days, we'll refund your investment - no questions asked.
          </p>
        </div>
      </div>
    </div>
  );
}
