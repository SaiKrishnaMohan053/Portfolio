import React, { useState } from "react";
import { Code } from "lucide-react";
import { Button } from "react-bootstrap";
import ContactModal from "../components/contactModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="home" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center text-md-start">
            <div className="d-inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-pill fw-semibold mb-3">
              Full Stack Developer
            </div>
            <h1 className="display-5 fw-bold text-dark">
              Building <span className="text-primary">digital experiences</span> that matter
            </h1>
            <p className="lead text-muted">
              I create responsive web applications and websites that provide excellent user experiences and address business issues.
            </p>
            
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Get in Touch
              </Button>
              <Button variant="primary" href="#projects">
                View Projects
              </Button>
              <Button
                variant="outline-primary"
                href="/assets/Sai_Krishna_Mohan_Kolla_Resume.pdf"
                download="Sai_Krishna_Mohan_Kolla_Resume.pdf"
              >
                Download CV
              </Button>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="position-relative d-inline-block">
              <div
                className="rounded-circle overflow-hidden bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src="/assets/passport_photo.jpg"
                  alt="Developer Portrait"
                  className="img-fluid rounded-circle"
                  style={{ width: "90%", height: "90%", objectFit: "cover" }}
                />
              </div>
              <div className="position-absolute bottom-0 end-0 bg-white p-3 rounded-circle shadow">
                <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                  <Code size={24} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  );
};

export default Hero;