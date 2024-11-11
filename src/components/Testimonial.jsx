import React from "react";

// Reusable Testimonial Card Component
const TestimonialCard = ({ name, profession, image, testimonial }) => {
  return (
    <div className="space-y-8">
      <div className="relative group">
        <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
        <a href="#" className="cursor-pointer">
          <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
            <div className="flex items-center space-x-4">
              <img
                src={image}
                className="w-12 h-12 bg-center bg-cover border rounded-full"
                alt={name}
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="text-gray-500 text-md">{profession}</p>
              </div>
            </div>
            <p className="leading-normal text-gray-300 text-md">
              {testimonial}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

const Testimonial = () => {
  // Data for testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      profession: "Project Manager, ABC Construction",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      testimonial:
        "The team at Spaceify helped us streamline our construction project, making it more efficient and within budget.",
    },
    {
      name: "Priya Sharma",
      profession: "Architect, Dwell Build",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      testimonial:
        "Their innovative solutions in design and construction have been invaluable for our ongoing projects.",
    },
    {
      name: "Amit Verma",
      profession: "Civil Engineer, Sharma Builders",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      testimonial:
        "Spaceify provided us with exceptional support during the construction process. Their expertise is unmatched.",
    },
    {
      name: "Neha Desai",
      profession: "Interior Designer, Casa Interiors",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      testimonial:
        "I highly recommend Spaceify for their attention to detail and commitment to delivering quality work on time.",
    },
    {
      name: "Vikas Patel",
      profession: "Construction Supervisor, Elite Constructions",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      testimonial:
        "Spaceify made the construction process smoother, keeping us on track with our timelines and goals.",
    },
    {
      name: "Sonia Mehta",
      profession: "Urban Planner, Green Spaces",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      testimonial:
        "Spaceify’s approach to sustainable and eco-friendly building practices has greatly benefited our projects.",
    },
  ];

  return (
    <section id="testimonial" className="py-20 bg-background">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              profession={testimonial.profession}
              image={testimonial.image}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
