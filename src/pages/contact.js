import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
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
      content: "saikrishnamohan.k@gmail.com",
      link: "mailto:saikrishnamohan.k@gmail.com",
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
      content: "Mobile, AL",
      link: "https://maps.google.com/?q=Mobile,+AL",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_portfolio',
      'template_portfolio',
      formData,
      'P_FAXTnZxnuTO18V2'
    )
    .then((result) => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Your message has been sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setSubmitMessage('There was an error sending your message. Please try again.');
      console.error(error);
    });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-4">Get In Touch</h2>
          <div className="mx-auto mb-3" style={{ width: '80px', height: '4px', backgroundColor: '#0d6efd' }}></div>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            Feel free to reach out using the form below or through my contact information.
          </p>
        </div>

        <div className="row mb-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="col-md-4 mb-4">
              <a 
                href={info.link} 
                target={info.title === "Location" ? "_blank" : ""}
                rel={info.title === "Location" ? "noopener noreferrer" : ""}
                className="bg-white p-4 rounded shadow-sm text-center d-block text-decoration-none"
              >
                <div className="d-flex justify-content-center mb-3">
                  <div className="p-3 rounded-circle" style={{ backgroundColor: '#e0e7ff' }}>
                    {info.icon}
                  </div>
                </div>
                <h5 className="fw-bold text-dark mb-2">{info.title}</h5>
                <p className="text-muted mb-0">{info.content}</p>
              </a>
            </div>
          ))}
        </div>

        <div className="card shadow-sm overflow-hidden">
          <div className="row justify-content-center g-0">
            <div className="col-md-8 p-4 p-md-5">
              <h3 className="h4 fw-bold text-dark mb-4 text-center">Send Me a Message</h3>

              {submitMessage && (
                <div className={`mb-4 alert ${submitStatus === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
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
                </div>
                <div className="mb-3">
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
                </div>
                <div className="mb-3">
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
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;