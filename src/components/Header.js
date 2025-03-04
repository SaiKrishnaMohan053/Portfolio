import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed-top ${isScrolled ? 'bg-white shadow py-2' : 'bg-transparent py-4'} transition`}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <a
            href="#home"
            className="d-flex align-items-center gap-2 text-primary fs-4 fw-bold text-decoration-none"
          >
            <Code size={24} />
            <span>SaiKrishnaMohan_Kolla</span>
          </a>

          <nav className="d-none d-md-flex align-items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark text-decoration-none"
              >
                {link.name}
              </a>
            ))}
            <a href="mailto:saikrishnamohan.k@gmail.com" className="btn btn-primary" target='_blank' rel='noreferrer'>
              Hire Me
            </a>
          </nav>

          <button
            className="d-md-none btn btn-link text-dark"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            className="d-md-none py-3 bg-white position-absolute w-100 shadow"
            style={{ top: '100%', left: 0, right: 0 }}
          >
            <div className="d-flex flex-column gap-3 px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-dark text-decoration-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:saikrishnamohan.k@gmail.com"
                target='_blank'
                rel='noreferrer'
                className="btn btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;