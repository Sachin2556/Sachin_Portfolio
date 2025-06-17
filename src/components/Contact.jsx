import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
      
      <form
        action="https://formspree.io/f/mlekrnnl"
        method="POST"
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
