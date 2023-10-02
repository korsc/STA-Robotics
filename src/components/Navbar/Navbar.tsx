import React, { useState } from 'react';
import { Link } from 'react-scroll';
import STALogo from '../../assets/images/STARoboticsLogo.png';
import { Twirl as Hamburger } from 'hamburger-react';
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <nav className={`bg-white p-6 sticky z-10 top-0 backdrop-filter backdrop-blur-lg bg-opacity-20 firefox:bg-opacity-20`}>
      <div>
        {/* Logo and Team Name */}
        <ul>
        <li className='cursor-pointer'>
          <Link to="home" smooth={true} duration={500} offset={-500}>
            <img
              src={STALogo}
              alt='sta_logo'
              style={{
                width: '50px',
                height: 'auto',
                position: 'fixed',
                left: '15px',
                top: '18px',
              }}
              className='h-[30px] '
            />
          </Link>
        </li>

        <li
          style={{ position: 'absolute', top: '27px', left: '67px' }}
          className='cursor-pointer font-Khula text-red-500 italic text-2xl'
        >
          <Link to="home" smooth={true} duration={500} offset={-500}>
            TEAM 30405
          </Link>
        </li>
        </ul>

        {/* Desktop Navigation Links */}
        <div className='mobile:hidden'>
          <ul className='flex justify-center'>
          <li className='cursor-pointer mx-6 font-Nunito font-bold text-red-500 hover:text-gray-950 relative text-xl w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
            <Link to='vex' smooth={true} duration={500} offset={-100}>
              Vex
            </Link>
          </li>
          <li className='cursor-pointer mx-6 font-Nunito font-bold text-red-500 hover:text-gray-950 relative text-xl w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
            <Link to='about' smooth={true} duration={500} offset={-100}>
              About
            </Link>
          </li>
          <li className='cursor-pointer mx-6 font-Nunito font-bold text-red-500 hover:text-gray-950 relative text-xl w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
            <Link to='teams' smooth={true} duration={500} offset={-120}>
              Teams
            </Link>
          </li>
          <li className='cursor-pointer mx-6 font-Nunito font-bold text-red-500 hover:text-gray-950 relative text-xl w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
            <Link to='gallery' smooth={true} duration={500} offset={-50}>
              Gallery
            </Link>
          </li>
          <li className='cursor-pointer mx-6 font-Nunito font-bold text-red-500 hover:text-gray-950 relative text-xl w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
            <Link to='sponsors' smooth={true} duration={500} offset={-70}>
              Sponsors
            </Link>
          </li>
          <li className='cursor-pointer mx-6 font-Nunito font-bold text-red-500 hover:text-gray-950 relative text-xl w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
            <Link to='contact' smooth={true} duration={500} offset={-50}>
              Contact
            </Link>
          </li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */} 
        <div style={{position: 'relative', bottom:'6px'}} className='md:hidden flex justify-end z-10'>
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            size={30}
            color='#FF0000' // Customize the hamburger color
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className='bg-white p-6 bg-opacity-20 h-screen firefox:bg-opacity-20'>
          <ul className='text-center mt-[20%]'>
          <h3 className='p-5 font-Khula text-4xl text-red-500 font-bold flex justify-center'>Navigation</h3>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='vex' onClick={handleLinkClick} smooth={true} duration={500} offset={-100}>
                Vex
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='about' onClick={handleLinkClick} smooth={true} duration={500} offset={-100}>
                About
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='teams' onClick={handleLinkClick} smooth={true} duration={500} offset={-120}>
                Teams
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='gallery' onClick={handleLinkClick} smooth={true} duration={500} offset={-50}>
                Gallery
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='sponsors' onClick={handleLinkClick} smooth={true} duration={500} offset={-50}>
                Sponsors
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='contact' onClick={handleLinkClick} smooth={true} duration={500} offset={-50}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
