import React from 'react';
import "./Services.css";

const servicesData = [
  {
    title: "Full Stack Development",
    description: "Building robust web applications with both front-end and back-end technologies."
  },
  {
    title: "Mobile App Development",
    description: "Creating user-friendly mobile applications for iOS and Android platforms."
  },
  {
    title: "Machine Learning",
    description: "Leveraging algorithms and data to build predictive models and intelligent systems."
  },
  {
    title: "GHL Automation",
    description: "Automating processes and workflows using Go High Level for streamlined operations."
  },
  {
    title: "Video Editing",
    description: "Producing engaging video content with professional editing techniques and tools."
  },
  {
    title: "Graphic Designing",
    description: "Crafting visually appealing designs for branding, marketing, and more."
  }
];

const Services = () => {
  return (
    <div className="services-container">
        <div>
      <h3 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold mb-3">
        Our <span style={{ color: "rgb(199,47,72)" }}>Services</span>
      </h3>
      <div className="services-card-container">
        {servicesData.map((service, index) => (
            <div key={index} className="services-card text-center sm:text-xl text-lg flex flex-col justify-center items-center">
            <h5>{service.title}</h5>
            <p className="mt-2 text-center font-light sm:text-sm text-xs">{service.description}</p>
          </div>
        ))}
      </div>
              </div>
    </div>
  );
};

export default Services;
