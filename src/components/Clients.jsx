import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const logos = [
  "icons/arcana.png",
  "icons/aster-logo.png",
  "icons/shahi.png",
  "icons/samsung.png",
  "icons/blackstone-logo.png",
  "icons/sparsh.png",
  "icons/siemens.png",
  "icons/goldman.png",
  "icons/xoxoday.png",
];

const Clients = () => {
  const theme = useTheme();
  const shadowColor = "white";
  return (
    <section className="bg-dark py-16">
      <h2 className="text-balance  font-semibold leading-none text-white tracking-tighter  text-6xl flex items-center justify-center p-10 gap-x-2">
        Our Valuable Clients
      </h2>
      <div className="max-w-xl mx-auto  bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-lg rounded-2xl p-6 border border-gray-200">
        <p className="text-gray-600 text-center">
          Our goal is to streamline the real estate journey. Through
          data-powered insights and cutting-edge technology, we equip our
          clients with the tools they need to make confident choices—whether
          they're purchasing, selling, or investing in real estate. From
          tailored advice to responsive assistance, we support you at every
          stage.
        </p>
      </div>

      <div className="relative overflow-hidden bg-background py-12">
        <motion.div
          className="flex w-max space-x-8"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="h-16 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
