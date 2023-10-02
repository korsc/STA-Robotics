//to-do after styling why sponsor part, properly design page wrapper and put the why sponsors portion and row of sponsors in separate wraps

import React from 'react';
import leoImg from '../../assets/images/leospizza.jpeg';
import MoneyGive from '../../assets/images/STA_sponsorimage1.svg'
import SponsorIdea from '../../assets/images/STA_sponsorimage2.svg'


const Sponsors: React.FC = () => {
  const TierASponsors = [
    { logo: leoImg, link: 'https://www.leospizzangrill.com/' },
    // Add more TierA sponsors as needed
  ];

  // const TierBSponsors = [
  //   { logo: leoImg, link: 'https://www.leospizzangrill.com/' },
  //   // Define TierB sponsors with imported images and links
  // ];

  // const TierCSponsors = [
  //   { logo: leoImg, link: 'https://www.leospizzangrill.com/' },
  //   // Define TierC sponsors with imported images and links
  // ];

  // const TierDSponsors = [
  //   { logo: leoImg, link: 'https://www.leospizzangrill.com/' },
  //   // Define TierD sponsors with imported images and links
  // ];

  const openSponsorLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="sponsors">
      <div className='page-wrapper relative bg-opacity-80'>
      <div className='md:flex md:w-[90%] justify-center'>
  <div className='md:w-[70%] md:h-[100%]'>
    <h3 className='font-Khula text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 relative'>
      Why Sponsor our program and STEM Education?
    </h3>
    <p className='relative leading-loose whitespace-normal'>
      Our robotics program offers students the opportunity for real-world, hands-on experiential learning. Participants must think creatively while they look for innovative ways to solve the challenges of the VEX season. Throughout the entire engineering design process, they are developing skills to become the leaders of tomorrow.
    </p>
  </div>
  <span>
    <img src={MoneyGive} className='md:relative md:mt-[-6%] mobile:mb-[12%] md:h-64 rounded-full border-red-700 border mobile:flex mobile:justify-center md:ml-[12%] mobile:mt-7 mx-auto mobile:w-80' alt="Sponsor Idea" />
  </span>
</div>

<div className='md:flex md:w-[90%] justify-end mt-[3%]'>
  <span>
      <img src={SponsorIdea} className='mobile:hidden md:relative md:h-64 rounded-full border-red-700 border' alt="Sponsor Idea" />
  </span>
  <div className='md:w-[70%] md:ml-[5%] md:h-[100%]'>
    <h3 className='font-Khula text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 relative'>
    What will sponsorship money go towards?
    </h3>
    <p className='relative leading-loose whitespace-normal'>
    Expenses for the VEX VRC League include initial team registration fees and entry fees per team for each individual competition attended. Various new elements specific to the new season's challenge, such as wheels, pneumatic systems, grips, etc., contribute to the overall costs. The majority of parts for our robots are reusable annually.
<br></br>
<br></br>
    Transportation of our robots, tools, extra parts, and team members to each competition can be challenging. In the future, we aspire to have a trailer for all out-of-town competitions. As mentioned on our 'about' page, one of our annual goals is to qualify for the World Championships. Achieving this comes with a significant financial component to cover travel expenses for all team members.
    </p>
    <img src={SponsorIdea} className='md:hidden mobile:my-[7%] rounded-full border-red-700 border mobile:flex mobile:justify-center mobile:mt-7 mx-auto mobile:w-80' alt="Sponsor Idea" />
  </div>
</div>



      </div>
      
      <div className='mt-8'>
        <h3 className='flex justify-center ml-[-10px] font-Khula text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 relative'>
          Sponsors
        </h3>
      </div>

      <div className='TierA mt-4'>

        {/* need to decide if we're naming the status of the sponsors (probably not), or just the different sizing */}
        <div className='sponsorlogos flex justify-center flex-wrap gap-6'>
          {TierASponsors.map((sponsor, index) => (
            <div
              key={index}
              className='sponsor-tier'
              onClick={() => openSponsorLink(sponsor.link)}
            >
              <img
                src={sponsor.logo}
                alt='sponsor'
                className='rounded-2xl cursor-pointer transition-transform transform hover:scale-105 hover:shadow-md shadow-2xl md:h-64 mobile:h-48 w-auto'
              />
            </div>
          ))}
        </div>
      </div>

            {/* <div className='TierB mt-4'>
        <h4 className='text-center text-2xl font-bold mb-2'>Tier B Sponsors</h4>
        <div className='sponsorlogos flex justify-center flex-wrap gap-6'>
          {TierBSponsors.map((sponsor, index) => (
            <div
              key={index}
              className='sponsor-tier'
              onClick={() => openSponsorLink(sponsor.link)}
            >
              <img
                src={sponsor.logo}
                alt='sponsor'
                className='rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-md shadow-lg h-60 w-auto'
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className='TierC mt-4'>
        <h4 className='text-center text-2xl font-bold mb-2'>Tier C Sponsors</h4>
        <div className='sponsorlogos flex justify-center flex-wrap gap-6'>
          {TierCSponsors.map((sponsor, index) => (
            <div
              key={index}
              className='sponsor-tier'
              onClick={() => openSponsorLink(sponsor.link)}
            >
              <img
                src={sponsor.logo}
                alt='sponsor'
                className='rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-md shadow-lg h-48 w-auto'
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className='TierD mt-4'>
        <h4 className='text-center text-2xl font-bold mb-2'>Tier D Sponsors</h4>
        <div className='sponsorlogos flex justify-center flex-wrap gap-6'>
          {TierDSponsors.map((sponsor, index) => (
            <div
              key={index}
              className='sponsor-tier'
              onClick={() => openSponsorLink(sponsor.link)}
            >
              <img
                src={sponsor.logo}
                alt='sponsor'
                className='rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-md shadow-lg h-40 w-auto'
              />
            </div>
          ))}
        </div>
      </div> */}


    </section>
  );
};

export default Sponsors;
