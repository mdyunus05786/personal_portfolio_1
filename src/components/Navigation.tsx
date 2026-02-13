import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="nav-shell">
      <div className="nav-inner">
        <div className="nav-row">
          <img
            src="/Signature.png"
            alt="Signature"
            className="nav-logo"
            style={{
              height: 'clamp(54px, 6.6vw, 84px)',
              width: 'auto',
              maxWidth: '360px',
            }}
          />

          {/* Desktop Navigation */}
          <div className="nav-links">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="nav-mobile">
          <div className="nav-mobile-inner">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-mobile-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-mobile-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-mobile-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-mobile-link"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-mobile-link"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}