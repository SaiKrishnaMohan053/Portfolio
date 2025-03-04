// Projects.js
import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "Real Estate Listing Platform",
    description:
      "A property listing platform with advanced search, filtering, and user authentication.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "Mapbox"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 3,
    title: "Content Management System",
    description:
      "A custom CMS built for content creators with markdown support and media management.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["Express", "MongoDB", "React", "Redux", "AWS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="display-6 fw-bold text-dark mb-3 text-center">
          Projects
        </h2>
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
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark"
                        aria-label="View live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary fw-semibold text-decoration-none"
                    >
                      View Project <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            <Github size={20} className="me-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;