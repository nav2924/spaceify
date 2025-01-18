import React from "react";

// Default placeholder images
const defaultImages = [
  "icons/arcana.png",
  "icons/aster-logo.png",
  "icons/shahi.png",
  "icons/samsung.png",
  "icons/blackstone-logo.png",
  "icons/sparsh.png",
];

const Clients = ({ images = defaultImages }) => {
  return (
    <section className="bg-dark py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 border border-background rounded-lg p-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            They Trusted Us
          </h2>
          <p className="text-gray-400 mb-10">
            Our goal is to streamline the real estate journey. Through
            data-powered insights and cutting-edge technology, we equip our
            clients with the tools they need to make confident choices—whether
            they're purchasing, selling, or investing in real estate. From
            tailored advice to responsive assistance, we support you at every
            stage.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 border border-background rounded-lg p-20">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:scale-105 transform transition duration-500"
            >
              <img
                src={image}
                alt={`Client ${index + 1}`}
                aria-label={`Logo of Client ${index + 1}`}
                className="h-auto w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
