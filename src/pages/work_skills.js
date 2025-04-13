import React, { useState, useEffect } from "react";
import { Layout, Server, Database, Terminal } from "lucide-react";

const workExperiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Ramphal Technologies Private Ltd",
    duration: "Jan 2020 - June 2023",
    description:
      "Developing scalable web applications and APIs with a focus on air traffic management solutions using modern technologies and agile methodologies.",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Ramphal Technologies Private Ltd",
    duration: "October 2020 - Dec 2020",
    description:
      "I created web interfaces that worked across a range of devices, making them easy and fast to use. I also investigated new technologies and helped to find resources for projects.",
  },
];

const skillLinks = {
  React: "https://reactjs.org",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Bootstrap": "https://getbootstrap.com/",
  "HTML/CSS": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "Node.js": "https://nodejs.org",
  Express: "https://expressjs.com",
  Python: "https://www.python.org",
  Django: "https://www.djangoproject.com",
  MongoDB: "https://www.mongodb.com",
  Git: "https://git-scm.com",
  AWS: "https://aws.amazon.com",
  "CI/CD": "https://circleci.com",
};

const additionalTechLinks = {
  Redux: "https://redux.js.org",
  Jest: "https://jestjs.io",
  "RESTful API": "https://restfulapi.net",
  Vercel: "https://vercel.com",
  Render: "https://render.com/",
  "Material UI": "https://mui.com",
  "Responsive Design": "https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/",
  Agile: "https://www.agilealliance.org",
};

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-primary" size={24} />,
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="text-primary" size={24} />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: <Database className="text-primary" size={24} />,
    skills: [
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="text-primary" size={24} />,
    skills: [
      { name: "Git", level: 90 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

const WorkSkills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work-skills" className="py-5 bg-white">
      <div className="container">
        <div className="mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3 text-center">
            Work Experience
          </h2>
          <div className="row">
            {workExperiences.map((exp) => (
              <div key={exp.id} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-dark">{exp.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {exp.company} &bull; {exp.duration}
                    </h6>
                    <p className="card-text text-muted">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3 text-center">
            Skills
          </h2>
          <div className="row g-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="col-md-6">
                <div className="bg-white p-4 rounded shadow">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="bg-light p-2 rounded">{category.icon}</div>
                    <h5 className="fw-bold text-dark mb-0">{category.title}</h5>
                  </div>
                  <div>
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="text-dark">
                            {skillLinks[skill.name] ? (
                              <a
                                href={skillLinks[skill.name]}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "inherit",
                                  textDecoration: "none",
                                }}
                              >
                                {skill.name}
                              </a>
                            ) : (
                              skill.name
                            )}
                          </span>
                          <span className="small text-muted">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="progress" style={{ height: "4px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{
                              width: animate ? `${skill.level}%` : "0%",
                              transition: "width 1.5s ease-in-out",
                            }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-white p-4 rounded shadow">
            <h3 className="text-center fw-bold text-dark mb-3">
              Additional Technologies
            </h3>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {[
                "Redux",
                "Jest",
                "RESTful API",
                "Vercel",
                "Render",
                "Material UI",
                "Responsive Design",
                "Agile",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="badge rounded-pill bg-light text-primary m-1 p-2"
                >
                  {additionalTechLinks[tech] ? (
                    <a
                      href={additionalTechLinks[tech]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {tech}
                    </a>
                  ) : (
                    tech
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSkills;