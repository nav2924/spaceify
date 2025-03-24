import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = formData;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: name || "No Name Provided",
          email: email || "No Email Provided",
          message: message || "No Message",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          setStatus("An error occurred, please try again.");
          setLoading(false);
          toast.error("An error occurred, please try again.", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-[#121E53] px-4 py-20 lg:py-[120px]">
        <h2 className="text-white text-3xl font-bold text-center pb-10">
          Enquire Us
        </h2>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-fit px-4 sm:w-4/5 md:w-2/3 lg:w-1/3">
              <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl p-10 sm:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full p-3 border border-white/20 bg-white/10 backdrop-blur-md text-white rounded-lg placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full p-3 border border-white/20 bg-white/10 backdrop-blur-md text-white rounded-lg placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="5"
                      className="w-full p-3 border border-white/20 bg-white/10 backdrop-blur-md text-white rounded-lg placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className={`px-6 py-3 text-white font-semibold bg-blue-700 rounded-xl hover:bg-blue-500 transition duration-200 ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="animate-spin">🔄</span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                  {status && (
                    <p className="text-center text-green-300">{status}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Enquiry;
