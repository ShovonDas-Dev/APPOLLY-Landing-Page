import React from "react";
import SectionHeader from "../SectionHeader";

import card from "../../data/reActivateTeamData";
import { motion } from "framer-motion";



const ReactiveTeam = () => {
  
  return (
    <div className="max-w-7xl mx-auto pb-30">
      {/* Section header  */}
      <div>
        <SectionHeader
          title="Our reactive team"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
          titleClassName="text-black"
          subtitleClassName="text-black"
        />
      </div>
      {/* Team member card list */}

      <div className="flex flex-col  pt-30 md:flex-row justify-center items-center gap-20">
        {card.map((p) => (
          <div key={p.id} className="group">
            {/* profile part */}
            <div className="flex flex-col items-center py-10 w-[320px] h-auto shadow-gray-300 shadow-xl ">
              
              
            <div className=" relative w-36 h-36">
              {/* ring */}
              <motion.div 
              animate={{ rotate:360 }}
              transition={{duration:15, repeat:Infinity, ease:"linear"}}
              className="absolute border-dashed border-primary border-[3px] inset-0 rounded-full "/>
              <div className=" absolute inset-[6px] overflow-hidden rounded-full">
                <img src={p.image} className="w-full h-full object-cover" alt="" />
              </div> 
            </div>


              <div className="pt-10 text-center font-my-font">
                <h2 className="  font-bold text-xl md:text-2xl text-black">
                  {p.name}
                </h2>
                <h2 className= "group-hover:text-primary duration-300 delay-0 group-hover:font-semibold text-gray pb-5 md:text-l ">{p.position}</h2>
                <p className="text-gray p-2">{p.description}</p>
              </div>
            
            {/* link part */}
            <div className="flex gap-5 py-4">
              {p.socials.map((icon )=>(
                <button className= "group-hover:text-primary duration-300 delay-0   hover:text-primary text-xl pr-3 border-r last:border-0 last:p-0" key={icon} href={icon.link}>
                {icon.platform}
                </button>
              ))}
            </div>
          </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ReactiveTeam;
