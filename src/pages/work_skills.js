import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./workSkills.css";
import third from "../logos/third_bank.png";
import huntington from "../logos/huntington.jpg";
import walmart from "../logos/walmart.png";
import amazon from "../logos/amazon.jpg";
import upstox from "../logos/upstox.png";

const sectionVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const titleVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const itemVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const workExperiences = [
  {
    id: 1,
    title: "Senior Java Full Stack Engineer",
    company: "Fifth Third Bank",
    duration: "Dec 2023 – Present",
    description:
      "Leading core-banking modernization using Spring Boot 3, Java 17, Kafka Streams, and AWS EKS. Built Node.js BFF APIs with React 18 dashboards, automated CI/CD pipelines using Jenkins and Terraform, and implemented secure OAuth2/JWT authentication.",
    iconSrc: third
  },
  {
    id: 2,
    title: "Senior Java Full Stack Engineer",
    company: "Huntington Bank",
    duration: "Apr 2021 – Nov 2023",
    description:
      "Delivered real-time payments and fraud detection microservices on AWS ECS using Spring Boot 2.7, Kafka, and PostgreSQL. Built GraphQL APIs and React 17 portals, automated CI/CD pipelines with Jenkins and Gradle, and improved API performance by 35%.",
    iconSrc: huntington
  },
  {
    id: 3,
    title: "Lead Java Full Stack Engineer",
    company: "Walmart",
    duration: "Jul 2018 – Mar 2021",
    description:
      "Architected a global inventory and order management system using Spring Boot 2, Angular 8, RabbitMQ, and Redis. Deployed microservices to GCP (GKE, App Engine) and optimized CI/CD pipelines via Jenkins and SonarQube in a large Agile environment.",
    iconSrc: walmart
  },
  {
    id: 4,
    title: "Java Full Stack Engineer",
    company: "Amazon",
    duration: "May 2017 – Jun 2018",
    description:
      "Developed warehouse automation and fulfillment modules with Spring Boot, React JS 16, AWS Lambda/SQS/SNS, and Docker. Built event-driven services to handle millions of daily orders and reduced message latency by 35%.",
    iconSrc: amazon
  },
  {
    id: 5,
    title: "Junior Java Software Engineer",
    company: "Upstox",
    duration: "Jun 2015 – Jul 2016",
    description:
      "Developed Struts/JSP-based trading modules, migrated to Spring MVC microservices, and integrated AWS (EC2, RDS, S3). Optimized SQL queries and implemented Log4j for better monitoring and stability.",
    iconSrc: upstox
  }
];

const skillCategories = [
  {
    title: "Languages & Programming",
    skills: ["Java 8–17", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3", "SASS", "LESS"]
  },
  {
    title: "Frontend",
    skills: [
      "React 18",
      "Redux Toolkit",
      "React Router",
      "Angular 8–15",
      "RxJS",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
      "HTML5",
      "CSS3"
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Spring Boot 3",
      "Spring Framework (Core, MVC, Cloud, Batch, Data JPA)",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "Kafka Streams",
      "RabbitMQ",
      "OAuth 2.0 / JWT",
      "Spring Security",
      "Microservices Architecture"
    ]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Amazon Aurora", "Redis", "DynamoDB"]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS (EKS, ECS, Lambda, EC2, S3, RDS, CloudFront, CloudWatch, CodePipeline)",
      "GCP (GKE, App Engine, Cloud SQL, Cloud Storage)",
      "Azure (App Service, ADF, DevOps)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "Ansible",
      "Maven / Gradle",
      "CI/CD Pipelines"
    ]
  },
  {
    title: "Testing & QA",
    skills: ["JUnit 5", "Mockito", "Cucumber (BDD)", "Selenium", "Jest", "Cypress", "Postman", "Swagger", "JMeter"]
  },
  {
    title: "Monitoring & Logging",
    skills: ["ELK Stack (Elasticsearch, Logstash, Kibana)", "Grafana", "Splunk", "AWS CloudWatch", "Prometheus"]
  },
  {
    title: "Collaboration & Project Management",
    skills: ["JIRA", "Confluence", "Git", "Bitbucket", "Agile / Scrum", "Lucidchart", "Draw.io", "Figma"]
  },
  {
    title: "Reporting & Analytics",
    skills: ["Jasper Reports"]
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

        {/* Skills Section */}
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
                      <span key={skill} className="skill-pill">{skill}</span>
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