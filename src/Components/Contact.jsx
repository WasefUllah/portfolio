import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 md:px-10 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 mt-14 text-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">📧 Email</h3>
              <p className="text-lg text-white badge badge-primary">wasefudvash@gmail.com</p>{" "}
              {/* Replace with your real email */}
            </div>
            <div>
              <h3 className="text-xl font-semibold">📱 Phone</h3>
              <p className="text-lg text-white badge badge-primary">+8801619043359</p>{" "}
              {/* Replace with your real number */}
            </div>
            <div>
              <h3 className="text-xl font-semibold">📍 Location</h3>
              <p className="text-lg badge badge-primary">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            action="https://formsubmit.co/wasefudvash@gmail.com" // Replace with your real email or EmailJS/form backend
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
