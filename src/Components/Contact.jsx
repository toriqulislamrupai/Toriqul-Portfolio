import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_4gytk3u', 'template_hhmve5q', form.current, 'WRLBdkavJxedZ4RyE') // Replace with your own EmailJS keys
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        e.target.reset(); // Reset form after submission
      });
  };

  return (
    <section
      className="p-10 rounded-lg bg-white/10 backdrop-blur-lg text-white font-poppins"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide">Contact Us</h2>

      {/* Map Section */}
      <div className="mb-8 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9026507085043!2d90.501002!3d23.9112829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e9f3a907e1f9%3A0x45093109b8d05516!2sNarsingdi%20District!5e0!3m2!1sen!2sbd!4v1697815812852!5m2!1sen!2sbd"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
          title="Google Maps view of Narsingdi District, Dhaka, Bangladesh"
        ></iframe>
      </div>

      {/* Flex Section: Contact Info and Form */}
      <div className="flex flex-col md:flex-row items-start justify-between font-serif text-gray-300 font-light gap-8">
        {/* Left Section: Contact Info */}
        <div className="md:w-1/2 w-full">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-300">+880 168-694-6004</p>
          </div> 
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-300">Narsingdi, Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-300">toriqulislamrupai@gmail.com</p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="md:w-1/2 w-full">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="input input-bordered w-full mb-4 pl-2 pt-2 pb-2 rounded-lg bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 border-gray-700"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="input input-bordered w-full mb-4 pl-2 pt-2 pb-2  rounded-lg bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 border-gray-700"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full mb-4 pl-2 pt-2  rounded-lg bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 border-gray-700"
            required
          ></textarea>
          <button
            type="submit"
            className={`btn btn-primary w-full bg-transparent text-indigo-600 hover:text-indigo-800 border border-indigo-600 hover:border-indigo-800 font-semibold transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>


        </form>
      </div>
    </section>
  );
};

export default Contact;
