import React from "react";
import { motion } from "framer-motion";
import { Layers, Server, Code, Cloud } from "lucide-react";
import "./about.css";

const aboutContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const sectionTitleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-5 bg-light"
      variants={aboutContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <motion.div variants={sectionTitleVariant} className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">About Me</h2>
          <div className="section-underline mx-auto mb-3"></div>
        </motion.div>

        <motion.div variants={sectionTitleVariant} className="text-center mb-5 px-md-5">
          <h3 className="fw-bold text-dark mb-3">Introduction</h3>
          <p className="text-muted mx-auto about-text">
            I’m a <strong>Senior Java Full Stack Developer</strong> with over <strong>10 years</strong> of 
            experience designing, developing, and deploying scalable enterprise solutions 
            across <strong>banking, fintech, healthcare, and retail</strong> domains. My core expertise 
            lies in building <strong>Spring Boot microservices, React/Angular frontends, and AWS-based 
            cloud-native systems</strong> that combine high performance, security, and maintainability. 
            I thrive in transforming legacy monoliths into distributed architectures and automating 
            delivery pipelines that support modern digital platforms.
          </p>
        </motion.div>

        <div className="row g-4">
          <motion.div variants={cardVariant} className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100">
              <div className="icon-wrapper mb-3">
                <Layers size={30} className="text-accent" />
              </div>
              <h5 className="fw-bold text-dark mb-2">Frontend Development</h5>
              <p className="text-muted small">
                Creating responsive, accessible UIs with <strong>React 18</strong> and 
                <strong> Angular 15+</strong>, integrating REST and GraphQL APIs for seamless 
                real-time experiences using <strong>Redux Toolkit</strong> and <strong>TypeScript</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariant} className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100">
              <div className="icon-wrapper mb-3">
                <Server size={30} className="text-accent" />
              </div>
              <h5 className="fw-bold text-dark mb-2">Backend & APIs</h5>
              <p className="text-muted small">
                Engineering robust microservices with <strong>Java 17, Spring Boot 3, and Node.js</strong>, 
                integrating <strong>Kafka</strong> for event-driven workflows and using <strong>PostgreSQL, 
                Oracle, and MongoDB</strong> for optimized data persistence.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariant} className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100">
              <div className="icon-wrapper mb-3">
                <Cloud size={30} className="text-accent" />
              </div>
              <h5 className="fw-bold text-dark mb-2">Cloud & DevOps</h5>
              <p className="text-muted small">
                Deploying and automating workloads on <strong>AWS (EKS, ECS, Lambda)</strong> and <strong>GCP</strong> using <strong>Docker, Kubernetes, Terraform, and Jenkins</strong> for CI/CD pipelines and infrastructure as code.
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariant} className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100">
              <div className="icon-wrapper mb-3">
                <Code size={30} className="text-accent" />
              </div>
              <h5 className="fw-bold text-dark mb-2">Performance & Security</h5>
              <p className="text-muted small">
                Optimizing backend performance through <strong>JPA tuning, Redis caching, and async 
                processing</strong>, while ensuring security using <strong>Spring Security (OAuth2/JWT)</strong> and observability via <strong>ELK Stack</strong> and <strong>CloudWatch</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;