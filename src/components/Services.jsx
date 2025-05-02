import React from "react";
import "../index.css";

function ServicesPage({ services }) {
  return (
    <section id="services">
      {services.map((service, index) => (
        <article
          key={index}
          className="relative h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${service.backgroundImage})` }}
          aria-label={service.title}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            {/* SEO-friendly heading hierarchy */}
            <h2
              className="text-4xl md:text-6xl font-bold text-white"
              style={{ fontFamily: "SF Pro" }}
            >
              {service.title}
            </h2>

            <h3
              className="text-lg md:text-2xl text-white mt-4"
              style={{ fontFamily: "SF Pro" }}
            >
              {service.subtitle}
            </h3>

            <p className="text-sm md:text-lg text-white mt-6 max-w-xl">
              {service.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

function Services() {
  const servicesData = [
    {
      backgroundImage: "./commercial.jpg",
      title: "Commercial Advisory and Transactions",
      subtitle: "Office Space Interiors",
      description:
        "Strategic insights and assistance for leasing, purchasing, and designing office spaces. We help optimize commercial spaces for productivity, comfort, and aesthetics.",
    },
    {
      backgroundImage: "./Managed_office.jpg",
      title: "Managed Office Spaces",
      subtitle: "Flexible Office Solutions",
      description:
        "Fully equipped and customized office environments. We manage operations, maintenance, and setup so you can focus on growing your business.",
    },
    {
      backgroundImage: "./logistics.png",
      title: "Logistics and Warehousing",
      subtitle: "Construction Developer Solutions",
      description:
        "Tailored solutions for storage and supply chain management. Our services support efficient logistics and warehousing for large-scale construction projects.",
    },
  ];

  return <ServicesPage services={servicesData} />;
}

export default Services;
