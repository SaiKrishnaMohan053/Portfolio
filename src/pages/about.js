import React from "react";
import { Briefcase, Code, Layers, Server } from "lucide-react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">About Me</h2>
          <div className="mx-auto mb-3" style={{ width: "80px", height: "4px", backgroundColor: "#0d6efd" }}></div>
        </div>

        <div className="text-center mb-5">
          <h3 className="fw-bold text-dark">Introduction</h3>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
            I'm a Full Stack Developer specializing in React, Node.js, and MongoDB.
            I love developing interesting and scalable web applications.
            I have three years of experience in which I develop dynamic frontends,
            secure backends, and nicely organized databases to convert ideas into
            smooth digital products. I believe clean code and innovative problem-solving
            are the cornerstones of amazing user experiences.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100 position-relative">
              <div>
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle mx-auto mb-3">
                  <Layers size={30} className="text-primary" />
                </div>
                <h5 className="fw-bold text-dark">Frontend Developer</h5>
                <p className="text-muted small">
                  Expertise in React, JavaScript, and Tailwind CSS, delivering visually
                  stunning and interactive user interfaces.
                </p>
              </div>
              <div className="card-overlay">
                <a
                  href="https://roadmap.sh/frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Frontend Roadmap
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100 position-relative">
              <div>
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle mx-auto mb-3">
                  <Server size={30} className="text-primary" />
                </div>
                <h5 className="fw-bold text-dark">Backend Developer</h5>
                <p className="text-muted small">
                  Strong experience in Node.js, Express, and databases like MongoDB & MySQL,
                  ensuring high-performance backend systems.
                </p>
              </div>
              <div className="card-overlay">
                <a
                  href="https://roadmap.sh/backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Backend Roadmap
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100 position-relative">
              <div>
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle mx-auto mb-3">
                  <Code size={30} className="text-primary" />
                </div>
                <h5 className="fw-bold text-dark">React Developer</h5>
                <p className="text-muted small">
                  Specialized in building modern, scalable, and component-based web applications using React.js.
                </p>
              </div>
              <div className="card-overlay">
                <a
                  href="https://roadmap.sh/react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  React Roadmap
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100 position-relative">
              <div>
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle mx-auto mb-3">
                  <Briefcase size={30} className="text-primary" />
                </div>
                <h5 className="fw-bold text-dark">Full Stack Developer</h5>
                <p className="text-muted small">
                  Blending frontend and backend expertise to create seamless and robust full-stack applications.
                </p>
              </div>
              <div className="card-overlay">
                <a
                  href="https://roadmap.sh/full-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Full Stack Roadmap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;