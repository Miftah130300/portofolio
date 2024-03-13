import React, { useEffect, useState } from 'react';
import OjiHero from '../asset/ojicrop4.png';
import { NavBar } from './nav-bar';
import CVMiftah from '../asset/MiftahFauzy-CV.pdf'

export function LandingPage({ onClick }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <NavBar />
      {isMobile ? (
        // Mobile Version
        <section className="min-h-screen flex items-center justify-center" id="landingpage">
          <div className="flex flex-col items-center mx-3">
            <div className="text-blue-950 text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[55px] font-bold font-['Poppins'] text-center">
              Miftah Fauzy
            </div>
            <div className="text-blue-950 text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[16px] font-bold font-['Poppins'] my-5 text-center">
              A Front-End Developer. I love to design and code web.
            </div>
            <div className='flex justify-between w-full max-w-[250px]'>
              <button className="w-full max-w-[120px] h-11 bg-teal-400 hover:bg-teal-600 text-white rounded-[10px] text-[15px] font-bold font-['Mochiy Pop One'] mt-20" 
              onClick={onClick}>Let's connect</button>
              <button className="w-full max-w-[120px] h-11 bg-white hover:bg-teal-600 text-teal-400 rounded-[10px] text-[15px] font-bold font-['Mochiy Pop One'] mt-20 border border-teal-600" 
              ><a href={CVMiftah} download='cv_miftah-fauzy.pdf' target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Download CV</a></button>
            </div>
          </div>
        </section>
      ) : (
        // Desktop Version
        <section
          className="bg-center md:bg-cover min-h-screen flex items-center justify-center md:justify-center xl:justify-center"
          style={{ backgroundImage: `url(${OjiHero})` }}
          id="landingpage">
          <div className="flex flex-col mx-6 items-center md:items-center xl:items-center">
            <div className="flex flex-col">
              <div className="text-white text-[40px] lg:text-[50px] xl:text-[55px] font-bold font-['Poppins'] text-center xl:text-center">
                Miftah Fauzy
              </div>
              <div className="text-white text-[16px] font-['Poppins'] text-center xl:text-center">
                A Front-End Developer. I'm passionate about UI/UX and Front-End Development. I love to design and code web.
              </div>
            </div>
            <div className='flex justify-between w-full max-w-[250px] mt-20'>
              <button className="w-full max-w-[120px] h-11 bg-teal-400 hover:bg-teal-600 text-white rounded-[10px] text-[15px] font-bold font-['Mochiy Pop One']" 
              onClick={onClick}>Let's connect</button>
              <button className="w-full max-w-[120px] h-11 bg-white hover:bg-teal-600 hover:text-white text-teal-400 rounded-[10px] text-[15px] font-bold font-['Mochiy Pop One']" 
              ><a href={CVMiftah} download='cv_miftah-fauzy.pdf' target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Download CV</a></button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
