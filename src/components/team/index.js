// import React from "react";
// import "./index.css";
// import img1 from "../../assets/images/waleed-profile.png"
// import img2 from "../../assets/images/prathmesh-profile.png";
// import img3 from "../../assets/images/abdulrahman-profile.png";
// import img4 from "../../assets/images/majeed-profile.png";


// const teamMembers = [
//   {
//     imgUrl: img1,
//     name: "Waleed Muniri",
//     position: "Founder & CEO",
//   },
//   {
//     imgUrl: img2,
//     name: "Prathmesh Gaikwad",
//     position: "Co-Founder & CTO",
//   },
//   {
//     imgUrl: img3,
//     name: "Abdulrahman M ",
//     position: "Co-Founder & COO",
//   },
//   {
//     imgUrl: img4,
//     name: "Abdul Majeed",
//     position: "Tech Advisor",
//   },
// ];

// const Team = () => {
//   return (
//     <section className="our__team unique-team-section">
//       <div className="container unique-team-container">
//         <div className="team__content unique-team-content">
//           <h2>
//             <span className="highlight unique-highlight">Our Team</span>
//           </h2>
//         </div>
//         <div className="team__wrapper unique-team-wrapper">
//           {teamMembers.map((item, index) => (
//             <div className="team__item unique-team-item" key={index}>
//               <div className="team__img unique-team-img">
//                 <img src={item.imgUrl} alt={item.name} />
//               </div>
//               <div className="team__details unique-team-details">
//                 <h4>{item.name}</h4>
//                 <p className="description unique-description">
//                   {item.position}
//                 </p>
               
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import React from "react";
import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import "./index.css";
import img1 from "../../assets/images/waleed-profile.png";
import img2 from "../../assets/images/prathmesh-profile.png";
import img3 from "../../assets/images/abdulrahman-profile.png";
import img4 from "../../assets/images/majeed-profile.png";
import img5 from "../../assets/images/narmin-profile.png";


const teamMembers = [
  {
    imgUrl: img1,
    name: "Waleed Muniri",
    position: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/waleedmuniri/",
  },
  {
    imgUrl: img2,
    name: "Prathmesh Gaikwad",
    position: "Co-Founder & CTO",
    linkedin: " https://www.linkedin.com/in/prathmesh-gaikwad-1640b8251/",
  },
  {
    imgUrl: img3,
    name: "Abdulrahman M",
    position: "Co-Founder & COO",
    linkedin:
      "https://www.linkedin.com/in/abdulrahman-alanazi-pmp%C2%AE-cscp-cfm-605214123/",
  },
  {
    imgUrl: img4,
    name: "Abdul Majeed",
    position: "Tech Advisor",
    linkedin: "https://www.linkedin.com/in/majeed-mohtesham",
  },
  {
    imgUrl: img5,
    name: "Narmin Mohtesham",
    position: "Junior UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/narmin-m-652917231/",
  },
];

// Animation variants
const cardVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 100 },
};

const Team = () => {
  return (
    <section className="our__team unique-team-section">
      <div className="container unique-team-container">
        <div className="team__content unique-team-content">
          <h2>
            <span className="highlight unique-highlight">Our Team</span>
          </h2>
        </div>

        <div className="team__wrapper unique-team-wrapper">
          {teamMembers.map((item, index) => (
            <TeamMemberCard key={index} member={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }) => {
  const control = useAnimation();
  const ref = React.useRef(null); // Create a ref for the card

  // Effect to observe the ref
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      });
    });

    const currentRef = ref.current; // Copy ref.current to a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the copied variable in the cleanup
      }
    };
  }, [control]);

  return (
    <motion.div
      className="team__item unique-team-item"
      ref={ref} // Attach the ref
      variants={cardVariant}
      initial="hidden"
      animate={control}
    >
      <div className="team__img unique-team-img">
        <a href={member.linkedin}>
          <img src={member.imgUrl} alt={member.name} />
        </a>
      </div>
      <div className="team__details unique-team-details">
        <h4>{member.name}</h4>
        <p className="description unique-description">{member.position}</p>
      </div>
    </motion.div>
  );
};


export default Team;
