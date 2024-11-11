import React from "react";
import "../index.css";

function ServicesPage({ services }) {
  return (
    <div id="services">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content container */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            {/* Title */}
            <h1
              className="text-4xl md:text-6xl font-bold text-white"
              style={{ fontFamily: "SF Pro" }}
            >
              {service.title}
            </h1>

            <p
              className="text-lg md:text-2xl text-white mt-4"
              style={{ fontFamily: "SF Pro" }}
            >
              {service.subtitle}
            </p>

            <p className="text-sm md:text-lg text-white mt-6 max-w-xl">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Services() {
  const servicesData = [
    {
      backgroundImage: "./commercial.jpg",
      title: "Commercial Advisory and Transactions",
      subtitle: "Office Space Interiors",
      description:
        "Our Commercial Advisory and Transactions service provides strategic insights and assistance for leasing, purchasing, and designing office spaces. We offer guidance that meets both functional and aesthetic requirements, optimizing spaces for enhanced productivity and comfort.",
    },
    {
      backgroundImage: "./Managed_office.jpg",
      title: "Managed Office Spaces",
      subtitle: "Flexible Office Solutions",
      description:
        "Our Managed Office Spaces service offers fully equipped, customized office environments, designed to meet the unique needs of each client. We handle operations, maintenance, and interior setups, allowing businesses to focus on growth and productivity without the hassle of space management.",
    },
    {
      backgroundImage: "./logistics.png",
      title: "Logistics and Warehousing",
      subtitle: "Construction Developer Solutions",
      description:
        "Our Logistics and Warehousing service provides developers with tailored solutions for storage and supply chain management. From warehousing to efficient logistics support, we ensure seamless operations that support construction timelines and project efficiency.",
    },
  ];

  return <ServicesPage services={servicesData} />;
}

export default Services;
