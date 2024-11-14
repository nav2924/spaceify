import React from "react";
import GradualSpacing from "./ui/gradual-spacing";

const About = () => {
  return (
    <section id="about">
      <div className="bg-gradient-to-b from-[hsl(229,64%,12%)] to-[hsl(229,64%,20%)] text-white min-h-screen flex flex-col items-center px-6 py-10">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest text-white md:text-7xl md:leading-[5rem]"
            text="About Us"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 w-full max-w-5xl px-4">
          <img
            src="/aout.jpg"
            alt="Real Estate Team"
            className="min-w-16 md:w-[55%] h-96  rounded-lg object-cover shadow-lg"
          />
          <div className="bg-slate-700 p-8 rounded-lg w-full md:w-[45%] text-center md:text-left shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Your Trusted Partner in Real Estate Solutions
            </h2>
            <p className="mb-6 text-sm md:text-base leading-relaxed md:leading-loose bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Our mission is to simplify the real estate process. We offer
              data-driven insights and innovative technology to help clients
              make informed decisions, whether they're buying, selling, or
              investing in properties. From personalized recommendations to
              on-demand support, we empower you every step of the way.
            </p>
          </div>
        </div>

        {/* Stats */}
        <section class="py-20">
          <div class="mx-auto max-w-7xl px-3 sm:px-3 lg:px-8">
            <div class="flex flex-col gap-10 xl:gap-14 lg:flex-row lg:justify-between">
              <div class="w-full lg:w-1/3 ">
                <div class="font-manrope font-bold text-5xl text-indigo-400 mb-6 text-center ">
                  500
                </div>
                <p class="text-lg text-gray-500 leading-7 text-center">
                  Properties Sold
                </p>
              </div>
              <div class="w-full lg:w-1/3 ">
                <div class="font-manrope font-bold text-5xl text-indigo-400 mb-6 text-center ">
                  1200+
                </div>
                <p class="text-lg text-gray-500 leading-7 text-center">
                  Happy Clients
                </p>
              </div>
              <div class="w-full lg:w-1/3 ">
                <div class="font-manrope font-bold text-5xl text-indigo-400 mb-6 text-center ">
                  30+
                </div>
                <p class="text-lg text-gray-500 leading-7 text-center">
                  Cities Covered
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
