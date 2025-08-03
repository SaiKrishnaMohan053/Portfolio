import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      content: "ksaikrishnamohan1501@gmail.com",
      link: "mailto:ksaikrishnamohan1501@gmail.com",
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      content: "+1 (251) 721-7855",
      link: "tel:+12517217855",
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      content: "United States",
      link: "https://maps.app.goo.gl/1aeAWVtfCGzGX5XL9",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_portfolio',
      'template_portfolio',
      formData,
      'Sn_hlMaR-W7qYRU8y'
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Your message has been sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(() => {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setSubmitMessage('There was an error sending your message. Please try again.');
    });
  };

  return (
    <motion.section
      id="contact"
      className="py-5 bg-light"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="container">

        <motion.div className="text-center mb-5" variants={itemVariants}>
          <h2 className="display-6 fw-bold text-dark mb-4">Get In Touch</h2>
          <div 
            className="mx-auto mb-3" 
            style={{ width: '80px', height: '4px', backgroundColor: '#0d6efd' }}
          />
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            Feel free to reach out using the form below or through my contact information.
          </p>
        </motion.div>

        <motion.div className="row mb-4" variants={itemVariants}>
          {contactInfo.map((info, idx) => (
            <motion.div key={idx} className="col-md-4 mb-4" variants={itemVariants}>
              <a 
                href={info.link}
                target={info.title === "Location" ? "_blank" : undefined}
                rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                className="bg-white p-4 rounded shadow-sm text-center d-block text-decoration-none"
              >
                <div className="d-flex justify-content-center mb-3">
                  <div className="p-3 rounded-circle" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                    {info.icon}
                  </div>
                </div>
                <h5 className="fw-bold text-dark mb-2">{info.title}</h5>
                <p className="text-muted mb-0">{info.content}</p>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="card shadow-sm overflow-hidden" variants={itemVariants}>
          <div className="row justify-content-center g-0">
            <div className="col-md-8 p-4 p-md-5">
              <h3 className="h4 fw-bold text-dark mb-4 text-center">Send Me a Message</h3>

              {submitMessage && (
                <div 
                  className={`mb-4 alert ${
                    submitStatus === 'success' ? 'alert-success' : 'alert-danger'
                  }`}
                  role="alert"
                >
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <motion.div className="row mb-3" variants={itemVariants}>
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="john@example.com"
                    />
                  </div>
                </motion.div>

                <motion.div className="mb-3" variants={itemVariants}>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                <motion.div className="mb-3" variants={itemVariants}>
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-control"
                    placeholder="I'd like to discuss a project..."
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span 
                          className="spinner-border spinner-border-sm" 
                          role="status" 
                          aria-hidden="true"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}