import React from 'react';
import './Vex.css';
import Vexlogo from '../../assets/images/vex-robotics-logo-vector.svg';

const About: React.FC = () => {
  return (
    <div className='mt-96 vex-page-wrapper relative'>
      <section id='vex' className='md:flex md:items-center'>
        <div>
          <h3 className='font-Khula text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mobile:text-center mobile:'>
            What is Vex Robotics?
          </h3>

          <p className='mt-4 font-Nunito leading-loose'> {/* ask if he wants mr-36 (margin right-36, show him how it looks and ask which is better)*/}
            VEX Robotics is educational robotics for everyone. VEX solutions
            span all levels of both formal and informal education with
            accessible, scalable, and affordable solutions. Beyond science and
            engineering principles, VEX encourages creativity, teamwork,
            leadership, and problem-solving among groups. It allows educators
            of all types to engage and inspire the STEM problem solvers of
            tomorrow!
          </p>

          <p className='mt-4 font-Nunito text-left leading-loose'>
            <strong>Tournament Format:</strong> Teams compete in rounds of 2 vs 2 round robin
            competition where they are randomly paired with teams from across
            the competition. After this is complete, all teams are ranked and
            then proceed to form an alliance with another team. Once these
            alliances are chosen, they compete together throughout the knockout
            stages, and eventually, one alliance is crowned champion.
          </p>
        </div>

        <div className=''>
          <img src={Vexlogo} alt='Vex Robotics Logo' className='md:mr-96 mobile:flex mobile:justify-center mobile:mx-auto md:h-96 mobile:w-80 '/>
        </div>
      </section>
    </div>
  );
};

export default About;
