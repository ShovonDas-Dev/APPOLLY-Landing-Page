import React from 'react'
import Navbar from '../components/Navbar';
import HeroBg from "../image/HeroBG.png";

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Appfeatures from '../components/Appfeatures';
const HomePage = () => {
  return (
    <>
        {/* Nav and Hero section */}
        <section className=" bg- bg-cover min-h-screen"
         style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
          <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10"> 
            <div >
                <Navbar/>
            </div>
            <section>
              <HeroSection/>
            </section>
          </div>
            
        </section>
        {/* About Section */}
        <section className= " py-8 lg:py-12">
        <AboutSection/>
        </section>

        {/* App features */}
        <section className=" bg- bg-cover min-h-screen"
              style={{
                backgroundImage: `url(${HeroBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
          <Appfeatures/>
        </section>

        
    </>
  )
}

export default HomePage
