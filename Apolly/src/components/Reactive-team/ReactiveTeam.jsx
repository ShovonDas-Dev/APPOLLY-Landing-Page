import React from "react";
import SectionHeader from "../SectionHeader";
import { div } from "framer-motion/client";

import profile1 from "../../image/TeamMember/Profile1.png"
import profile2 from "../../image/TeamMember/Profile2.png"
import profile3 from "../../image/TeamMember/Profile3.png"

const card = [
  {
    id: 1,
    name:"Carla Press",
    position:"App Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
    image: profile1
  },
    {
    id: 2,
    name:"Craig Gouse",
    position:"UI/UX Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
    image: profile2
  },
    {
    id: 3,
    name:"Jocelyn Septimus",
    position:"Website developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
    image: profile3
  }
]

const ReactiveTeam = () => {
  console.log(card);
  return (
    <div className="max-w-7xl mx-auto">

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

      
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {card.map((p) => (
            <div key={p.id} className="">
              {/* profile part */}
                <div className="flex flex-col items-center">
                  <img src={p.image} alt={p.position} />
                  <h2>{p.name}</h2>
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>

                </div>
              {/* link part */}
                <div></div>
            </div>
          ))}
        </div>
       


    </div>
  );
};

export default ReactiveTeam;
