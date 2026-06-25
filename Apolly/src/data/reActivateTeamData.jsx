
import profile1 from "../image/TeamMember/Profile1.png";
import profile2 from "../image/TeamMember/Profile2.png";
import profile3 from "../image/TeamMember/Profile3.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";





const card = [
  {
    id: 1,
    name: "Carla Press",
    position: "App Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
    image: profile1,
    socials: [
      { platform: <FaFacebookF />, href: "#" },
      { platform: <FaInstagramSquare />, href: "#" },
      { platform: <FaTwitter />, href: "#" },
      { platform: <FaYoutube />, href: "#" },
    ],
  },
  {
    id: 2,
    name: "Craig Gouse",
    position: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
    image: profile2,
        socials: [
      { platform: <FaFacebookF />, href: "#" },
      { platform: <FaInstagramSquare />, href: "#" },
      { platform: <FaTwitter />, href: "#" },
      { platform: <FaYoutube />, href: "#" },
    ],
  },
  {
    id: 3,
    name: "Jocelyn Septimus",
    position: "Website developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
    image: profile3,
        socials: [
      { platform: <FaFacebookF />, href: "#" },
      { platform: <FaInstagramSquare />, href: "#" },
      { platform: <FaTwitter />, href: "#" },
      { platform: <FaYoutube />, href: "#" },
    ],
  },
];

// const socialICon = {
//     facebook: <FaFacebookF />,
//     instagram:<FaInstagramSquare />,
//     twiter:


// }


export default card