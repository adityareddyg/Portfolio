import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActiveLink = (path) => pathname === path ? 'text-yellow-500' : 'text-white';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0 shadow-md">
      <div className="mx-auto text-center flex justify-between items-center w-5/6">
        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-8 items-center text-sm font-medium">
          <Link to='/' className={`${isActiveLink('/')}`}>Home</Link>
          <Link to='/about' className={`${isActiveLink('/about')}`}>About</Link>
          <Link to='/projects' className={`${isActiveLink('/projects')}`}>Projects</Link>
          <Link to='/experience' className={`${isActiveLink('/experience')}`}>Experience</Link>
          <Link to='/certifications' className={`${isActiveLink('/certifications')}`}>Certifications</Link> {/* Added Certifications Link */}
          <Link to='/contact' className={`${isActiveLink('/contact')}`}>Contact</Link>
        </div>

        {/* Logo */}
        <div className="text-3xl sm:text-2xl font-extrabold">
          <a href="/">Aditya Reddy Gunda</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><Link to='/' onClick={closeMobileMenu} className={`${isActiveLink('/')}`}>Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu} className={`${isActiveLink('/about')}`}>About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu} className={`${isActiveLink('/projects')}`}>Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu} className={`${isActiveLink('/experience')}`}>Experience</Link></li>
            <li><Link to='/certifications' onClick={closeMobileMenu} className={`${isActiveLink('/certifications')}`}>Certifications</Link></li> {/* Added Certifications Link */}
            <li><Link to='/contact' onClick={closeMobileMenu} className={`${isActiveLink('/contact')}`}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
