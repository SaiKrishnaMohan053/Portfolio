import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./workSkills.css";
import usaa from "../logos/USAA.png";
import sofi from "../logos/sofi.png";
import lowes from "../logos/lowes.png";
import hartford from "../logos/hartford.svg";
import gap from "../logos/gap.png";

const sectionVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const titleVariant   = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const itemVariant    = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const workExperiences = [
  { id: 1, title: "Senior Full Stack Engineer", company: "USAA, Colorado Springs, CO", duration: "Jun 2024 – Present", description: "Modernizing claims processing with React.js, Tailwind CSS, Node.js & Express; integrating AWS S3/SES and legacy Spring Boot microservices.", iconSrc: usaa },
  { id: 2, title: "Senior Software Engineer", company: "SoFi, San Francisco, CA", duration: "Aug 2023 – May 2024", description: "Led development of SoFi's robo-advisor platform with dynamic UIs in React and Chart.js, and backend services in Node.js.", iconSrc: sofi },
  { id: 3, title: "Full Stack Developer", company: "Lowe’s, Charlotte, NC", duration: "May 2019 – Jul 2023", description: "Delivered B2B e-commerce features using React, Material UI, Node.js; implemented real-time inventory filters and admin dashboards.", iconSrc: lowes },
  { id: 4, title: "Full Stack Developer", company: "The Hartford, Chicago, IL", duration: "Dec 2016 – April 2019", description: "Built claims management platform with React/Redux, designed RESTful APIs in Express, and integrated AWS S3 for document handling.", iconSrc: hartford },
  { id: 5, title: "Junior Full Stack Developer", company: "GAP Inc, New York, NY", duration: "Aug 2015 – Nov 2016", description: "Developed budgeting and reporting tools with EJS, Bootstrap, and Node.js; optimized data entry flows and dashboards.", iconSrc: gap }
];

const skillCategories = [
  {
    title: "Languages & Programming",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Python (Scripting)",
      "SQL"
    ]
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Router",
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "Formik & Yup",
      "React Hook Form",
      "Chart.js",
      "EJS (legacy)",
      "jQuery (legacy)"
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT & OAuth 2.0",
      "RBAC (Role-Based Access Control)",
      "API Rate Limiting & Middleware",
      "File Uploads (Multer)",
      "Email (Nodemailer, AWS SES)"
    ]
  },
  {
    title: "Databases",
    skills: [
      "MongoDB & Mongoose",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Redis"
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS (EC2, S3, SES, IAM, Lambda, RDS, CloudFront, CloudWatch)",
      "Docker & PM2",
      "Vercel",
      "Render",
      "DigitalOcean",
      "GitHub Actions & Workflows",
      "Nginx",
      "Terraform (basic)"
    ]
  },
  {
    title: "Testing",
    skills: [
      "Jest",
      "Supertest",
      "Cypress",
      "Mocha & Chai",
      "Postman",
      "Swagger",
      "Insomnia"
    ]
  },
  {
    title: "CI/CD & Monitoring",
    skills: [
      "GitHub Actions",
      "GitHub Webhooks",
      "Sentry",
      "AWS CloudWatch",
      "JMeter"
    ]
  },
  {
    title: "Collaboration & Project Management",
    skills: [
      "JIRA",
      "Confluence",
      "Notion",
      "Lucidchart",
      "Figma",
      "Draw.io",
      "Agile (Scrum)"
    ]
  }
];

const WorkSkills = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => { setAnimate(true); }, []);

  return (
    <motion.section
      id="work"
      className="py-5 bg-light"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.div variants={titleVariant} className="mb-5 text-center">
          <h2 className="display-6 fw-bold text-dark">Work Experience</h2>
        </motion.div>

        <div className="timeline">
          {workExperiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${idx % 2 === 0 ? "right" : "left"}`}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.3 }}
            >
              <div className="icon-circle">
                <img src={exp.iconSrc} alt={`${exp.company} logo`} className="company-icon" />
              </div>

              <div className="timeline-content p-4">
                <h5 className="fw-semibold text-dark mb-1">{exp.title}</h5>
                <h6 className="text-secondary small mb-2">
                  {exp.company} &bull; {exp.duration}
                </h6>
                <p className="text-muted small mb-0">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section
          id="skills"
          className="skills-section py-12 bg-light"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <motion.div variants={titleVariant} className="mb-6 text-center">
              <h2 className="display-6 fw-bold text-dark">Skills</h2>
            </motion.div>

            <div className="skills-grid">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  className="skill-card"
                  whileHover={{ scale: 1.03 }}
                  variants={itemVariant}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="skill-title mb-3">{cat.title}</h3>
                  <div className="skill-list">
                    {cat.skills.map(skill => (
                      <span
                        key={skill}
                        className="skill-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.section>
  );
};

export default WorkSkills;