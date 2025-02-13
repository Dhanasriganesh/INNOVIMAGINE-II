import React from 'react'

function Herosection() {
  return (
    <div>  
            <section className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white  min-h-screen flex items-center">
    <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div className="text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Transform Digital Dreams into Reality
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          InnovImagine crafts cutting-edge digital solutions that push the boundaries of technology and innovation.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all">
            Explore Services
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-6 rounded-lg transition-all">
            View Portfolio
          </button>
        </div>
      </div>
      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/your-image.png" // Replace with actual image URL
          alt="Digital Innovation"
          className="max-w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section></div>
  )
}

export default Herosection