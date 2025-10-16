import React, { useState } from "react";
import { Code } from "lucide-react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import ContactModal from "../components/contactModal";

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const badgeVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const paragraphVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};
const buttonsVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};
const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
};

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.section
      id="home"
      className="py-5 bg-light"
      variants={heroContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center text-md-start">
            <motion.div variants={badgeVariant}
              className="d-inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-pill fw-semibold mb-3"
            >
              Senior Full Stack Developer
            </motion.div>

            <motion.h1 variants={headingVariant} className="display-5 fw-bold text-dark">
              Building <span className="text-primary">scalable, secure</span> and
              <span className="text-primary"> high-performance</span> applications
            </motion.h1>

            <motion.p variants={paragraphVariant} className="lead text-muted">
              I bring 10+ years of experience delivering enterprise-grade applications across 
              banking, fintech, healthcare, and retail. Skilled in Java, Spring Boot, React, 
              Node.js, and AWS, I build scalable, secure, and high-performance systems 
              that power global digital platforms.
            </motion.p>

            <motion.div variants={buttonsVariant} className="d-flex flex-wrap gap-3 mt-4">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Get in Touch
              </Button>
              <Button variant="primary" href="#projects">
                View Projects
              </Button>
              <Button
                variant="outline-primary"
                href="/assets/SR._JAVA_FULL_STACK_DEVELOPER_krishna_mohan.docx"
                download="Krishna_Mohan_Java_FullStack_Resume.docx"
              >
                Download CV
              </Button>
            </motion.div>
          </div>

          <div className="col-md-6 text-center">
            <motion.div variants={imageVariant} className="position-relative d-inline-block">
              <div
                className="rounded-circle overflow-hidden bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src="/assets/passport_photo.jpeg"
                  alt="Sai Krishna Mohan - Senior Java Full Stack Developer"
                  className="rounded-circle"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              <div className="position-absolute bottom-0 end-0 bg-white p-3 rounded-circle shadow">
                <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                  <Code size={24} className="text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactModal show={showModal} handleClose={() => setShowModal(false)} />
    </motion.section>
  );
};

export default Hero;