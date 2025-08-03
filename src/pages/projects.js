import React from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    id: 1,
    title: "AI-Enhanced E-commerce Platform",
    description:
      "A full-stack web app built with React, Node.js, and MongoDB. It supports product variants, real-time stock updates, secure JWT-based login, and AWS S3 image uploads. Designed to streamline admin management while offering a clean, responsive shopping experience for users.",
    image:
      "https://www.technivision.com/wp-content/uploads/2013/05/ecommerce.jpg",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
    ],
    liveLink: "https://e-comwholesale.vercel.app/",
    githubLink: {
      frontend: "https://github.com/SaiKrishnaMohan053/E-Commerce_frontend",
      backend: "https://github.com/SaiKrishnaMohan053/E-Commerce_backend",
    },
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-5 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <motion.h2
          className="display-6 fw-bold text-dark mb-3 text-center"
          variants={itemVariants}
        >
          Projects
        </motion.h2>

        <motion.div className="row" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-6 col-lg-4 mb-4"
              variants={itemVariants}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">
                    {project.title}
                  </h5>
                  <p className="card-text text-muted">
                    {project.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
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
                    className="btn btn-primary mb-3"
                  >
                    Live Link
                  </a>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}