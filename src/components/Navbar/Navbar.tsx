import React, { useState } from 'react';
import { Link } from 'react-scroll';
import STALogo from '../../assets/images/STARoboticsLogo.png';
import { Twirl as Hamburger } from 'hamburger-react';
import Socials from '../Socials/Socials';
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
    <nav className={`p-6 sticky z-10 top-0 backdrop-filter backdrop-blur-lg bg-opacity-20 firefox:bg-opacity-20`}>
      <div>
        {/* Logo and Team Name */}
        <ul className='mobile:hidden'>
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

        <ul className='md:hidden flex justify-start'>
        <li className='cursor-pointer'>
          <Link to="home" smooth={false} duration={500} offset={-500}>
            <img
              src={STALogo}
              alt='sta_logo'
              style={{
                width: '50px',
                height: 'auto',
                position: 'relative', 
                left: '-12px'
              }}
            />
          </Link>
        </li>

        <li
          className='cursor-pointer font-Khula text-red-500 italic text-2xl mt-[9px] ml-[-11px]'
        >
          <Link to="home" smooth={false} duration={500} offset={-500}>
            TEAM 30405
          </Link>
        </li>

        {/* Mobile Hamburger Button */} 
        <div style={{position: 'absolute', right:'10px'}} className='md:hidden flex justify-end z-10'>
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            size={30}
            color='#FF0000' // Customize the hamburger color
          />
        </div>
        </ul>

      </div>

      

      {/* Mobile Navigation Menu */}
      
        <div onClick={() => setIsOpen(!isOpen)} className={`mobile:left-0 transition-opacity mobile:top-0 bg-white fixed place-items-center h-[100vh] mobile:w-screen`} style={{opacity: (isOpen ? "100" : "0"), pointerEvents: (isOpen ? "auto" : "none")}}>
          <ul className='text-center mt-[40%] tablet-nav'>
          <h3 className='font-Khula text-4xl text-red-500 font-bold flex justify-center'>Navigation</h3>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='vex' onClick={handleLinkClick} smooth={false} duration={400} offset={-100}>
                Vex
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='about' onClick={handleLinkClick} smooth={false} duration={400} offset={-100}>
                About
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='teams' onClick={handleLinkClick} smooth={false} duration={400} offset={-120}>
                Teams
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='gallery' onClick={handleLinkClick} smooth={false} duration={400} offset={-70}>
                Gallery
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='sponsors' onClick={handleLinkClick} smooth={false} duration={400} offset={-60}>
                Sponsors
              </Link>
            </li>
            <li className='block my-4 font-Nunito font-bold text-red-500 hover:text-gray-950'>
              <Link to='contact' onClick={handleLinkClick} smooth={false} duration={400} offset={-60}>
                Contact
              </Link>
            </li>
            <div className='text-red-500 mobile:flex mobile:justify-center mobile:ml-5 mobile:mt-7'>
            <Socials/>
            </div>
          </ul>
        </div>
      
    </nav>
  );
};

export default Navbar;
