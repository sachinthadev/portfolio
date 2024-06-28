import React  from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.svg'
import { Link } from 'react-scroll';


const Navbar = () => {
  
  return (
    
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-65} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-65} duration={500} className="desktopMenuListItem">Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-65} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
      <Link to='contact' spy={false} smooth={true} offset={-65} duration={500}> <button className="desktopMenuBtn"  >
          <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button></Link> 
    </nav>
   
  );
};

export default Navbar
