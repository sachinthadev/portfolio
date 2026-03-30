import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.svg';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      {/* Mobile Menu Icon */}
      <div className="mobileMenuIcon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
      </div>

      {/* Menu Items */}
      <div className={`desktopMenu ${menuOpen ? 'open' : ''}`}>
        <Link onClick={closeMenu} activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link onClick={closeMenu} activeClass='active' to='experience' spy={true} smooth={true} offset={-65} duration={500} className="desktopMenuListItem">Experience</Link>
        <Link onClick={closeMenu} activeClass='active' to='projects' spy={true} smooth={true} offset={-65} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link onClick={closeMenu} activeClass='active' to='skills' spy={true} smooth={true} offset={-65} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link onClick={closeMenu} activeClass='active' to='education' spy={true} smooth={true} offset={-65} duration={500} className="desktopMenuListItem">Education</Link>
        <Link onClick={closeMenu} to='contact' spy={false} smooth={true} offset={-65} duration={500}>
          <button className="desktopMenuBtn">
            <img src={contactImg} alt="Contact" className="desktopMenuImg" />
            Contact Me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
