import React from "react";

const TestimonialCard = ({ name, profession, image, testimonial }) => {
  return (
    <div className="space-y-8">
      <div className="relative group">
        <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
        <a href="#" className="cursor-pointer">
          <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
            <div className="flex items-center space-x-4">
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
      name: "Pearl Dsouza",
      profession: "Senior HR, Cartesian Consulting",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      testimonial:
        "Working with Spaceify was a game-changer in finding the perfect office space for our team. They understood our needs, respected our culture, and delivered a workspace that fosters creativity and productivity. Highly recommended!",
    },
    {
      name: "Swaja Bajaj",
      profession: "Senior HR, Blitz",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      testimonial:
        "Thank you for helping us find the ideal office space! Spaceify's team was professional, supportive, and made the process smooth and stress-free. We truly appreciated the attention to detail and dedication throughout.",
    },
    {
      name: "Suraj Sharma",
      profession: "Senior Admin and Facilities, Xoxoday",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      testimonial:
        "Partnering with Spaceify completely transformed our office space search. They guided us every step of the way and helped us secure a workspace that fits our brand and team culture perfectly.",
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
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
