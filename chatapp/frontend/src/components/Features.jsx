import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Designed for business teams like yours
          </h2>
          <p className="sm:text-xl text-gray-400">
            Here at Swift, we focus on markets where technology and capital can
            unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Marketing */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Marketing</h3>
            <p className="text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly and hit your
              marketing goals every month.
            </p>
          </div>

          {/* Legal Compliance */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a1 1 0 00-1 1v14a1 1 0 102 0V3a1 1 0 00-1-1z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Legal Compliance</h3>
            <p className="text-gray-400">
              Protect your organization with structured workflows and custom
              permissions.
            </p>
          </div>

          {/* Business Automation */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Business Automation</h3>
            <p className="text-gray-400">
              Automate tasks, send Slack messages, and streamline your workflow.
            </p>
          </div>

          {/* Finance */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Finance</h3>
            <p className="text-gray-400">
              Audit-proof software built for critical financial operations.
            </p>
          </div>

          {/* Enterprise Design */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a1 1 0 00-1 1v14a1 1 0 102 0V3a1 1 0 00-1-1z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Enterprise Design</h3>
            <p className="text-gray-400">
              Create delightful experiences for both mobile and web platforms.
            </p>
          </div>

          {/* Operations */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a1 1 0 00-1 1v14a1 1 0 102 0V3a1 1 0 00-1-1z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Operations</h3>
            <p className="text-gray-400">
              Ensure smooth workflows and structured processes for your teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
