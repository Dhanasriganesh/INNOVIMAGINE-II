import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
 
function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
  });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
 
      const result = await response.json();
      if (response.ok) {
        alert('Consultation request sent successfully!');
      } else {
        alert('Error sending consultation request: ' + result.error);
      }
    } catch (error) {
      alert('Error sending request: ' + error.message);
    }
  };
 
  return (
    <div className="min-h-screen bg-navy-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Let's Innovate Together
          </h1>
          <p className=" text-lg text-white leading-relaxed">
            Ready to transform your digital vision into reality? Schedule a consultation with
            our expert team and discover how InnovImagine can elevate your technology solutions.
          </p>
         
          {/* Contact Information */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-800/20 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-white">Direct Line</p>
                <p className="text-lg text-white font-semibold">+91 9000278794</p>
              </div>
            </div>
 
            <div className="flex items-center space-x-3">
              <div className="bg-purple-800/20 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-white">Email Us</p>
                <p className="text-lg text-white font-semibold">innovimagine@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
 
        {/* Right Column - Contact Form */}
        <div className="bg-white/60 p-8 rounded-2xl backdrop-blur-sm shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none"
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
 
            <div>
              <label className="block text-gray-700 mb-2">Service of Interest</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none"
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a Service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Development</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="consulting">IT Consulting</option>
              </select>
            </div>
 
            <div>
              <label className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project or inquiry..."
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none resize-none"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
 
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              REQUEST CONSULTATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;