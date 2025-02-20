import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
 
function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'submitted'
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
 
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
        setStatus('submitted');
      } else {
        alert('Error sending consultation request: ' + result.error);
        setStatus('idle');
      }
    } catch (error) {
      alert('Error sending request: ' + error.message);
      setStatus('idle');
    }
  };
 
  return (
    <div className="min-h-screen bg-navy-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Let's Innovate Together
          </h1>
          <p className=" text-lg text-white leading-relaxed">
            Ready to transform your digital vision into reality? Schedule a consultation with
            our expert team and discover how InnovImagine can elevate your technology solutions.
          </p>
          <div className="space-y-4 pt-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-800/20 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-white">Direct Line</p>
                <a href="tel:+919000278794" className="text-lg text-white font-semibold">
                  +91 9000278794
                </a>
              </div>
 
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-800/20 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-white">Email Us</p>
                <a href="mailto:innovimagine@gmail.com" className="text-lg text-white font-semibold">
                  innovimagine@gmail.com
                </a>
              </div>
 
            </div>
          </div>
        </div>
        <div className="bg-white/60 p-8 rounded-2xl backdrop-blur-sm shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none"
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
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
              <div>
                <label className="block text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Mobile number"
                  value={formData.mobileNumber || '+91'}
                  maxLength="13"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none appearance-none"
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only update if the value matches the pattern (+91 + 10 digits)
                    if (/^\+91\d{0,10}$/.test(value)) {
                      setFormData({ ...formData, mobileNumber: value });
                    }
                  }}
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
                <option value="ui">UI/UX</option>
                <option value="portfolio">Portfolio</option>
                <option value="web">Web Development</option>
                <option value="mobile">Android/IOS Application Development</option>
                <option value="resume">Resume/CV</option>
                <option value="consulting">AI Tool Development</option>
                <option value="seo">Seo & Digital Marketing</option>
                <option value="software">Software Solutions & Support</option>
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
              className={`w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${status === 'idle' ? 'bg-purple-600 hover:bg-purple-700 hover:scale-[1.02]' :
                status === 'sending' ? 'bg-gray-400 cursor-not-allowed' :
                  'bg-green-600 cursor-default'
                }`}
              disabled={status === 'sending' || status === 'submitted'}
            >
              {status === 'idle' && 'REQUEST CONSULTATION'}
              {status === 'sending' && 'Sending...'}
              {status === 'submitted' && 'Submitted'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;