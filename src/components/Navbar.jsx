import React, { useState, useEffect } from "react";
import { Testimonial } from ".";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  let lastScrollY = 0; // Variable to store last scroll position

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Menu = [
    { id: 1, name: "Home", path: "#" },
    { id: 2, name: "Services", path: "#services" },
    { id: 3, name: "About", path: "#about" },
    { id: 4, name: "Testimonial", path: "#testimonial" },
    { id: 5, name: "Contact", path: "#contact" },
  ];

  return (
    <div>
      <nav
        className={`bg-transparent py-4 px-8 fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <a href="#">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-24 w-32 rounded-lg"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {Menu.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className="text-white hover:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

      {isMenuOpen && (
        <div className="fixed top-0 right-0 z-30 flex items-start justify-end">
          <div className="bg-black bg-opacity-80 rounded-lg p-6 w-64 text-white text-center shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Menu Links */}
            <ul className="space-y-4">
              {Menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline hover:scale-105 transition-transform ease-in-out"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Hero Section with Video */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute inset-0"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Spaceify</h1>
            <p className="text-lg sm:text-xl mb-6">
              Construction solutions simplified
            </p>
            <a
              href="#services"
              className="bg-background text-white py-3 px-6 rounded-full hover:bg-gray-700 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      <Testimonial />
    </div>
  );
};

export default Navbar;
