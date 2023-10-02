import TechScene from '../../assets/images/staaboutimg1.svg'
import Trophy from '../../assets/images/staaboutimg2.svg'

const About: React.FC=()=>{
    return(

<div className='mt-96 page-wrapper relative'>
      <section id='about'>
        
      <div className='md:flex md:w-[90%] justify-end'>
  <span>
      <img src={TechScene} className='mobile:hidden md:relative md:h-64 rounded-full border-red-700 border' alt="Sponsor Idea" />
  </span>
  <div className='md:w-[70%] md:ml-[3.5%] md:h-[100%]'>
    <h3 className='font-Khula text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 relative'>
    Our Program
    </h3>
    <p className='relative leading-loose whitespace-normal'>
    At STA we currently have  4 competitive teams spanning grades 10 to 12. Our students come to us primarily from our Computer Programming classes (ICD2O, ICS3U, ICS4U) and Computer Engineering (TEJ3M, TEJ4M) classes and have a passion for designing, building and programming. As members of the London District Catholic School Board, our students get to compete in the newly formed LDCSB Robotics league as well as the VEX VRC Competitive league in Ontario where we compete as Team 30405. 
    </p>

    <img src={TechScene} className='md:hidden rounded-full border-red-700 border mobile:flex mobile:justify-center mobile:mb-[15%] mobile:mt-[4%]' alt="Sponsor Idea" />

  </div>
</div>




<div className='md:flex md:w-[90%] justify-center md:mt-[3%] mobile:mt-[8%]'>
  <div className='md:w-[70%] md:h-[100%]'>
    <h3 className='font-Khula text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 relative'>
    Our Goals
    </h3>
    <p className='relative leading-loose whitespace-normal'>
    Every year the top Ontario teams in the VEX VRC league qualify for provincials in March. Qualifying for this tournament is done through smaller league tournaments from December to February. Main qualification is done through winning the tournament's head to head section or skills competition. Alternately team with the most creative design, well kept engineering notebook, team interviews, and all around scores have opportunities to qualify as well. 
    <br></br>
    <br></br>
Our dreams do not end there however. Once at provincials teams have the opportunity to qualify for Worlds held annually in April. As a brand new team in the 22/23 season we came up short of qualifying for provincials but are hoping to go all the way this year and one day be crowned world champions. 
    </p>
  </div>
  <span>
    <img src={Trophy} className='md:relative md:mt-[8%] md:h-64 rounded-full border-red-700 border mobile:flex mobile:justify-center md:ml-[20%] mobile:mt-7' alt="Sponsor Idea" />
  </span>
</div>



        
      </section>
    </div>
    
    );
};

export default About;