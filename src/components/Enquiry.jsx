import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";

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

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name || "No Name Provided",  
        email: formData.email || "No Email Provided",
        message: formData.message || "No Message",
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )    
      .then(
        (response) => {
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

    console.log("Data being sent:", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-[#121E53] p-20  lg:py-[120px]">
        <h2 className="text-white text-3xl font-bold text-center py-8">
          Enquire Us
        </h2>
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-center ">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg  sm:p-12">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full p-3 border rounded text-gray-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full p-3 border rounded text-gray-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-3 border rounded text-gray-600"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4 text-center">
                    <button
                      type="submit"
                      className={`px-6 py-3 text-white bg-blue-700 rounded hover:bg-blue-500 ${
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
                    <p className="text-center text-green-500">{status}</p>
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
