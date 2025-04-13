import React from "react";
import { Modal } from "react-bootstrap";
import { Mail, Linkedin, Phone } from "lucide-react";

const ContactModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p className="text-muted">Choose a method to get in touch:</p>
        <div className="d-flex flex-column gap-3">
          <a href="tel:+12517217855" className="btn btn-outline-primary d-flex align-items-center gap-2">
            <Phone size={20} />
            Call Me
          </a>
          <a
            href="mailto:saikrishnamohan.k@gmail.com?subject=Hiring%20Inquiry&body=Hi%20there,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
            className="btn btn-outline-danger d-flex align-items-center gap-2"
          >
            <Mail size={20} />
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/sai-krishna-mohan-691982157"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark d-flex align-items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn Message
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;