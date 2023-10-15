import StaLogo from '../../assets/images/STARoboticsLogo.png'
import Socials from '../Socials/Socials';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <>

    
      <div className='mt-16 w-full relative bg-[#000]'>
        <div className='flex flex-col md:flex-row p-[5%] gap-8 md:gap-0 pb-0 mx-auto py-auto'>
          <div className='flex flex-col gap-2 w-full md:w-1/3'>
              <p className="text-sm uppercase text-gray-400 ">Copyright © STA Robotics 2023</p>
              <div className='flex ml-[-7px]'>
              < img src={StaLogo} alt='STA Logo' className='w-10 mr-1'/>
                    <h2 className='text-3xl font-Khula text-white mt-[0.5%]'>STA Robotics</h2>
                </div>
            <div className='text-white md:p-5 mobile:p-2 mobile:ml-3'>
                  <Socials/>
                </div>
            
          </div>

          <div className='w-full md:w-1/3'>
            <p className='text-md uppercase font-bold text-gray-500'>Site Navigation</p>
            
            <ul className='text-red-600'>
              <li><Link to='vex' smooth={false} duration={500} offset={-100} className='hover:text-white font-bold cursor-pointer'>
                Vex
              </Link></li>
              <li><Link to='about' smooth={false} duration={500} offset={-100} className='hover:text-white font-bold cursor-pointer'>
                About
              </Link></li>
              <li><Link to='teams' smooth={false} duration={500} offset={-100} className='hover:text-white font-bold cursor-pointer'>
                Teams
              </Link></li>
              <li><Link to='gallery' smooth={false} duration={500} offset={-100} className='hover:text-white font-bold cursor-pointer'>
                Gallery
              </Link></li>
              <li><Link to='sponsors' smooth={false} duration={500} offset={-100}className='hover:text-white font-bold cursor-pointer'>
                Sponsors
              </Link></li>
              <li><Link to='contact' smooth={false} duration={500} offset={-100} className='hover:text-white font-bold cursor-pointer'>
                Contact
              </Link></li>

            </ul>
          </div>

          <div className='w-full md:w-1/3 mb-[10%]'>
            <p className='text-md uppercase font-bold text-gray-500'>Important Links</p>
          <ul>
            <li> <a href='https://www.vexrobotics.com/competition' target='_blank' className='text-red-600 font-bold hover:text-white'>Vex Competition</a></li>

            {/* <li> <a href='https://www.vexrobotics.com/competition' target='_blank' className='text-red-600 font-bold hover:text-white'>Support Us</a></li> */}

         
          </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
