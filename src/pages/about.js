import React from "react";
import { motion } from "framer-motion";
import { Layers, Server, Code, Cloud } from "lucide-react";
import "./about.css";

// Animation variants
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
        {/* Section Heading */}
        <motion.div variants={sectionTitleVariant} className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">About Me</h2>
          <div className="section-underline mx-auto mb-3"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div variants={sectionTitleVariant} className="text-center mb-5 px-md-5">
          <h3 className="fw-bold text-dark mb-3">Introduction</h3>
          <p className="text-muted mx-auto about-text">
            With over <strong>10 years</strong> of experience in insurance, fintech,
            e-commerce, and retail, I craft robust, scalable, and secure web
            solutions using the MERN stack, TypeScript, and cloud-native architectures.
            I thrive on transforming complex requirements into intuitive digital
            products that drive measurable business impact.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="row g-4">
          <motion.div variants={cardVariant} className="col-md-3">
            <div className="card text-center shadow-sm p-4 h-100">
              <div className="icon-wrapper mb-3">
                <Layers size={30} className="text-accent" />
              </div>
              <h5 className="fw-bold text-dark mb-2">Frontend Development</h5>
              <p className="text-muted small">
                Building responsive, accessible interfaces with React, Redux,
                and modern CSS frameworks to deliver seamless user experiences.
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
                Designing high-performance APIs with Node.js, Express, and
                databases like MongoDB & MySQL to power scalable backends.
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
                Leveraging AWS (EC2, S3, Lambda), Docker, and CI/CD pipelines to
                automate deployments and ensure production reliability.
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
                Implementing code optimization, testing, and secure coding
                practices to deliver reliable, high-performance web applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;