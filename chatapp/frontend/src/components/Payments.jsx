import React from "react";

const Payments = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="mx-auto max-w-screen-md text-center mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light sm:text-xl text-gray-400">
            Here at Swift, we focus on markets where technology and capital can
            unlock long-term value and drive growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center">
            <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
            <p className="font-light sm:text-lg text-gray-400">
              Best option for personal use & your next project.
            </p>
            <div className="flex justify-center items-baseline my-4">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              {[
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 1 developer",
                "Premium support: 6 months",
                "Free updates",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="text-white hover:bg-[#1B57E9] bg-primary p-2 rounded-lg"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;