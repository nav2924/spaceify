import React, { useState, useRef } from "react";
import GradualSpacing from "./ui/gradual-spacing";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const stats = [
  { id: 1, value: "500", title: "Properties Sold" },
  { id: 2, value: "1200+", title: "Happy Clients" },
  { id: 3, value: "30+", title: "Cities Covered" },
];
const About = () => {
  const [scrollCounterOn, setScrollCounterOn] = useState(false);

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
        <section className="py-20">
      <ScrollTrigger
        onEnter={() => setScrollCounterOn(true)}
        onExit={() => setScrollCounterOn(false)}
      >
        <div className="flex justify-center items-center gap-10 overflow-x-auto">
          {stats.map((stat) => {
            const hasPlus = stat.value.includes("+");
            const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);

            return (
              <div
                key={stat.id}
                className="flex flex-col justify-center items-center text-center min-w-[150px]"
              >
                <h4 className="font-manrope font-bold text-5xl text-indigo-200 mb-2">
                  {scrollCounterOn && (
                    <CountUp
                      start={0}
                      end={numericValue}
                      duration={2.5}
                      delay={0.2}
                    />
                  )}
                  {hasPlus && "+"}
                </h4>
                <p className="text-lg text-gray-500 leading-7">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </ScrollTrigger>
    </section>
      </div>
    </section>
  );
};

export default About;
