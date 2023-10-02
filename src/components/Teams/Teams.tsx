// Teams.tsx
// FIX WRAPPING SECTION ISSUE



import React from 'react';
import './Teams.css';
import image1 from '../Teams/RoboticsTeamGraphics/sta1.webp';
import image2 from '../Teams/RoboticsTeamGraphics/sta2.webp';
import image3 from '../Teams/RoboticsTeamGraphics/sta3.webp';
import image4 from '../Teams/RoboticsTeamGraphics/sta4.webp';
import '../../index.css'

const Teams: React.FC = () => {
  const images = [
    {
      src: image1,
      title: 'STA 1 - Team Lambda',
      description: "Team 1 consisted of three grade 12 students, from left to right: Khoa Vinh Lai, Team Captain Cooper Hatfield, and Hadden Christ. They finished the LDCSB season as a member of the winning alliance capturing the school's first robotics banner.",
    },
    {
      src: image2,
      title: 'STA 2 - Team Sigma',
      description: 'Team 2 consisted of 4 grade 12 students as well, from left to right: Cole Branston, Team Captain Ethan Greene, Jack Branston, and Meghan Newkirk. They finished the LDCSB season as the 2nd member of the winning alliances helping bring STA their first league banner. ',
    },
    {
      src: image3,
      title: 'STA 3 - Team Omega',
      description: 'Our 3rd and final senior team consisting of 1 grade 12 and 2 grade 11 students, left to right: Mathew Pilgrim, Team Captain Alex English, and Dilan Ismail. This team advanced into the semi-finals of the LDCSB league as well as qualifying for the round of 16 in our one and only VEX league competition. ',
    },
    {
      src: image4,
      title: 'STA 4 - Team Rocket',
      description: 'Named after their love of space and good friend Yuto, our junior team consisted of 4 grade 10 students. Unfortunately two were unable to attend our league championships so pictured here are Andrew Wylie (left) and Team captain Mason Figliomeni (right). Not pictured are William Hooey, and Maddox Miller-Pinheiro. ',
    },
  ];

  return (
    <>
    <section id="teams" className="teams">
        <h3 className='mt-[-48px] font-Khula text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 relative mobile:mt-[0.2%] flex justify-center text-center'>Teams</h3>
        
      <div className="teams ">
        <div className='image-grid'>
          {images.map((image, index) => (
            <div className="image image-container image-rounded" key={index}>
              <img src={image.src} alt={`Image ${index}`} className="image-rounded my-5" />
              <div className="image__overlay">
                <p className="image__title">{image.title}</p>
                <p className="image__description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Teams;
