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
        "Working with Spaceify was an absolute game-changer in finding the perfect office space for our team. Their expertise and dedication made the entire process seamless, from identifying our specific needs to presenting us with ideal options. They took the time to understand our company culture and ensured we found a location that aligns perfectly with our vision. Thanks to Spaceify, we now have an office that fosters creativity and productivity. Highly recommend their services to anyone in search of the ideal workspace!",
    },
    {
      name: "Swaja Bajaj",
      profession: "Senior HR, Blitz",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      testimonial:
        "I just wanted to take a moment to sincerely thank you for all your help in finding the best Office space for us. Your expertise and dedication made the entire process seamless, and we truly appreciate the effort pu and ymr team put in.Your team has been incredibly understanding and supportive throughout, ensuring that every detail was taken care of while finahzing the deal- Its been a pleasure working with you. and were grateful for your professionalism and commitment-Looking forward to staying touch and working together again in the future",
    },
    {
      name: "Suraj Sharma",
      profession: "Senior Admin and Facilities, Xoxoday",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      testimonial:
        "Partnering with Spaceify completely transformed our search for the right office space. Their team was incredibly attentive and professional, guiding us through every step—from understanding our requirements to securing a space that fits our brand and work style. They didn’t just find us a place to work; they helped us create an environment where our team can thrive. We’re beyond satisfied with the results and would strongly recommend Spaceify to any business looking for their next workspace.",
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
