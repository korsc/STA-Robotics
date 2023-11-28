// import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Vex from './components/Vex/Vex';
import About from './components/About/About.tsx';
import Teams from './components/Teams/Teams.tsx'
import Gallery from './components/Gallery/Gallery.tsx';
import Sponsors from './components/Sponsors/Sponsors.tsx';
import Contact from './components/Contact/Contact.tsx';
import CircuitAnimation from './components/CircuitAnimation/CircuitAnimation';
import Footer from './components/Footer/Footer.tsx';

// import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <CircuitAnimation />
        <Home />
        

{/* weird div to push things down, cause it wasnt rendering properly */}
      <div className=''>
        <Vex/>
      <div className="">
        <About/>
      </div>
      <div className="page-wrapper">
        <Teams />
      </div>
      <div className="box-shadow-wrapper">
        <Gallery />
      </div>
      <div className="box-shadow-wrapper">
        <Sponsors />
      </div>
      
        <Contact />
      </div>
      <Footer/>
    </>
  );
};

export default App;
