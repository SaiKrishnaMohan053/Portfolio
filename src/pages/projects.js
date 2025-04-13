// Projects.js
import React from "react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Enhanced E-commerce Platform",
    description:
      "A full-stack web app built with React, Node.js, and MongoDB. It supports product variants, real-time stock updates, secure JWT-based login, and AWS S3 image uploads. Designed to streamline admin management while offering a clean, responsive shopping experience for users.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
    ],
    liveLink: "https://e-commerce-frontend-blue-mu.vercel.app/",
    githubLink: {
      frontend: "https://github.com/SaiKrishnaMohan053/E-Commerce_frontend",
      backend: "https://github.com/SaiKrishnaMohan053/E-Commerce_backend",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="display-6 fw-bold text-dark mb-3 text-center">Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="badge rounded-pill bg-light text-primary me-1 mb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginBottom: "15px" }}
                  >Live Link</a>
                  <div className="d-flex gap-3">
                    <a
                      href={project.githubLink.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark d-flex align-items-center gap-1"
                      aria-label="Frontend GitHub repository"
                    >
                      <Github size={20} /> Frontend
                    </a>
                    <a
                      href={project.githubLink.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark d-flex align-items-center gap-1"
                      aria-label="Backend GitHub repository"
                    >
                      <Github size={20} /> Backend
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;