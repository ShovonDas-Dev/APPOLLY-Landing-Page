import React from 'react'
import Navbar from '../components/Navbar';
import HeroBg from "../image/HeroBG.png";

import HeroSection from '../components/HeroSection';
const HomePage = () => {
  return (
    <>
        <div className=" bg- bg-cover min-h-screen"
         style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
            <div >
                <Navbar/>
            </div>
            <div>
              <HeroSection/>
            </div>
          </div>
            
        </div>

        
    </>
  )
}

export default HomePage
