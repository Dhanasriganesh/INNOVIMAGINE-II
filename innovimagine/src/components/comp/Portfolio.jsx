import React from "react";

const projects = [
  {
    title: "HealthTech Platform",
    description: "Integrated telemedicine solution for global healthcare providers",
    technologies: ["React", "Node.js", "GraphQL"],
    image: "/healthtech.jpg", // Replace with actual image URL
    testimonial: "InnovImagine revolutionized our digital healthcare approach."
  },
  {
    title: "E-Commerce Ecosystem",
    description: "Scalable multi-vendor marketplace with AI recommendations",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    image: "/ecommerce.jpg", // Replace with actual image URL
    testimonial: "Their solution increased our online sales by 300%."
  },
  {
    title: "Educational Learning Platform",
    description: "Interactive online learning management system",
    technologies: ["Angular", "Kubernetes", "WebRTC"],
    image: "/education.jpg", // Replace with actual image URL
    testimonial: "Seamless learning experience for our global students."
  }
];

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Our Project Portfolio
        </h2>
        <p className="mt-3 text-gray-600">
          Transforming innovative ideas into cutting-edge digital solutions across diverse industries.
        </p>

        {/* Portfolio Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-pink-100 text-pink-600 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 italic text-gray-500 border-l-4 border-pink-500 pl-4">
                  "{project.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <div className="mt-10">
          <button className="bg-pink-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-pink-700 transition-all">
            View Full Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
