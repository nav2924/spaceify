import React, { useState, useEffect } from "react";
import { Testimonial, Clients, Services, About, Contact } from "./index";
import Loader from "./ui/Loader";
import "../index.css";
import Enquiry from "./Enquiry";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Menu = [
    { id: 1, name: "Home", path: "#" },
    { id: 2, name: "Services", path: "#services" },
    { id: 3, name: "About", path: "#about" },
    { id: 4, name: "Testimonial", path: "#testimonial" },
    { id: 5, name: "Enquiry", path: "#enquiry" },
    { id: 6, name: "Contact", path: "#contact" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`bg-transparent py-4 px-8 fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="#" className="text-white font-bold text-xl">
            <img
              src="/logo_bg.png"
              alt="Logo"
              className="h-28 w-40 rounded-lg"
            />
          </a>

          <div className="hidden md:flex space-x-8">
            {Menu.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className="text-white hover:text-gray-400"
                style={{ fontFamily: "SF Pro" }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 z-30 flex items-start justify-end">
          <div className="bg-black bg-opacity-80 rounded-lg p-6 w-64 text-white text-center shadow-lg relative">
            <button
              onClick={toggleMenu}
              className="absolute top-3 right-3 text-gray-300 hover:text-gray-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <ul className="space-y-4">
              {Menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline hover:scale-105 transition-transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Loader Animation (Before Video Loads) */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
          <Loader className="bg-white" /> {/* Rotating Icon */}
          <p className="text-lg">Loading...</p>
        </div>
      )}

      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay & Text */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "SF Pro" }}
            >
              Spaceify
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Construction solutions simplified
            </p>
            <a
              href="#services"
              className="bg-background text-white py-3 px-6 rounded-full hover:bg-gray-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Sections - Appear After Video Loads */}
      {videoLoaded && (
        <div className="transition-opacity duration-500 opacity-100">
          <About />
          <Services />
          <Clients />
          <Testimonial />
          <Contact />
          <Enquiry />
        </div>
      )}
    </div>
  );
};

export default Navbar;
