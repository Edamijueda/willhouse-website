import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button2';
import Logo from '../images/logo.png'
import './Navbar.css';

const scrollToRef = (ref) => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

function Navbar() {
  const myRef = useRef(null)
  const executeScroll = () => {
    scrollToRef(myRef);
    setClick(false);
  }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div ref={myRef}>
            <Link to='/' className='navbar-logo' onClick={executeScroll}>
              <img src={Logo} alt="KM logo" height="140px" />
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <div ref={myRef}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={executeScroll}>
                  Home
              </Link>
              </li>
            </div>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={executeScroll}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/coachingProgram' className='nav-links' onClick={executeScroll}>
                Coaching Program
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/testimonials' className='nav-links' onClick={executeScroll}>
                Testimonials
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href="https://books2read.com/WillHousePublishing"
                className='nav-links'
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Books
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={executeScroll}>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
