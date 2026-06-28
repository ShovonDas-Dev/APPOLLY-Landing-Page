import React from 'react'
import Navbar from '../components/Navbar';
import HeroBg from "../image/HeroBG.png";

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Appfeatures from '../components/Appfeatures';
import AppInterface from '../components/AppInterface/AppInterface';
import AppTutorial from '../components/AppTutorial/AppTutorial';
import ReactiveTeam from '../components/Reactive-team/ReactiveTeam';
import HappyCustomer from '../components/HappyCustomer/HappyCustomer';
import RecentBlog from '../components/RecentBlog/RecentBlog';
import Footer from '../components/Footer/Footer';
const HomePage = () => {
  return (
    <>
        {/* Nav and Hero section */}
        <section 
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
        <section className=" bbg-cover "
              style={{
                backgroundImage: `url(${HeroBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
          <Appfeatures/>
        </section>

        {/* Checkout Our App Interface Look */}
        <section>
          <AppInterface/>
        </section>

        {/* app perfectly  */}

        <section>
          <AppTutorial/>
        </section>

        {/* Our reative team */}
        <section>
              <ReactiveTeam/>
        </section>

        {/* Our Happy Customers */}
        <section className=" bg- bg-cover "
              style={{
                backgroundImage: `url(${HeroBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
          <HappyCustomer/>
        </section>

        {/* Our recent blog*/}
        <section>
              <RecentBlog/>
        </section>

        {/* Footer section */}

        <section>
          <Footer/>
        </section>
    </>
  )
}

export default HomePage
