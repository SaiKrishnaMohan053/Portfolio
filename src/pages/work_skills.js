import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./workSkills.css";
import natera from "../logos/natera-inc-logo.jpg";
import exact from "../logos/exact-sciences.png";
import ozk from "../logos/ozk.jpeg";
import hope from "../logos/hope-bancorp.png";
import upstox from "../logos/upstox.png";

const sectionVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const titleVariant   = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const itemVariant    = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const workExperiences = [
  { id: 1, title: "Senior Java Full Stack Engineer", company: "Natera", duration: "Dec 2023 – Present", description: "Modernizing healthcare platforms with Spring Boot microservices, AWS cloud migration, Kafka streaming, and React.js dashboards.", iconSrc: natera },
  { id: 2, title: "Java Full Stack Developer", company: "Exact Sciences", duration: "April 2021 – Nov 2023", description: "Built cloud-native apps with Spring Boot, Node.js, and AWS, delivering REST/GraphQL APIs, PostgreSQL optimization, and React frontends.", iconSrc: exact },
  { id: 3, title: "Java J2EE Developer", company: "Bank OZk", duration: "July 2018 – March 2021", description: "Migrated monolithic banking apps to Spring Boot microservices on GCP, with Angular frontends, RabbitMQ messaging, and GKE deployments.", iconSrc: ozk },
  { id: 4, title: "Java Developer", company: "Hope Bancorp Inc", duration: "May 2017 – June 2018", description: "Developed Spring/Hibernate microservices, modernized legacy JSP systems with Angular, and automated reporting via Azure Data Factory.", iconSrc: hope },
  { id: 5, title: "Junior Java Developer", company: "Upstox", duration: "Jun 2015 – July 2016", description: "Engineered Struts/JSP fintech apps, integrated AWS (EC2, Lambda, RDS, S3), and optimized SQL queries for faster, reliable transactions.", iconSrc: upstox }
];

const skillCategories = [
  {
    title: "Languages & Programming",
    skills: [
      "Java",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "HTML5",
      "CSS3",
      "SASS",
      "LESS"
    ]
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Redux",
      "React Router",
      "Angular",
      "Angular CLI",
      "RxJS",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
      "JSP",
      "JSTL",
      "JSF",
      "EJS (Legacy)",
      "jQuery (Legacy)"
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Spring Boot",
      "Spring Framework (Core, MVC, AOP, Batch, Data JPA)",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "SOAP (WSDL)",
      "JWT",
      "OAuth 2.0",
      "Spring Security",
      "Role-Based Access Control (RBAC)",
      "Kafka",
      "RabbitMQ",
      "JMS"
    ]
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB & Mongoose",
      "Amazon Aurora",
      "DynamoDB",
      "Google Cloud SQL",
      "Redis"
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS (EC2, S3, SES, IAM, Lambda, RDS, CloudFront, CloudWatch, ECS, EKS, CloudFormation, Auto Scaling, ELB)",
      "Google Cloud Platform (App Engine, GKE, Cloud SQL, Cloud Storage)",
      "Azure (App Service, Azure Storage, Azure Data Factory, Azure DevOps)",
      "Docker",
      "Kubernetes",
      "PM2",
      "Nginx",
      "Ansible",
      "Terraform (Basic)",
      "Jenkins",
      "Maven",
      "Gradle",
      "GitHub Actions",
      "GitHub Webhooks",
      "CI/CD Pipelines"
    ]
  },
  {
    title: "Testing & QA",
    skills: [
      "JUnit",
      "Mockito",
      "Cucumber (BDD)",
      "Selenium",
      "JEST",
      "Cypress",
      "Mocha & Chai",
      "Supertest",
      "Postman",
      "Swagger",
      "Insomnia",
      "JMeter"
    ]
  },
  {
    title: "Monitoring & Logging",
    skills: [
      "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "Splunk",
      "AWS CloudWatch",
      "Sentry"
    ]
  },
  {
    title: "Collaboration & Project Management",
    skills: [
      "JIRA",
      "Confluence",
      "Bitbucket",
      "Git",
      "Notion",
      "Agile (Scrum)",
      "Lucidchart",
      "Draw.io",
      "Figma"
    ]
  },
  {
    title: "Reporting & Analytics",
    skills: [
      "Jasper Reports"
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