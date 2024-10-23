import React from "react";
import "./index.css";
import img1 from "../../assets/images/waleed-profile.png"
import img2 from "../../assets/images/prathmesh-profile.png";
import img3 from "../../assets/images/abdulrahman-profile.png";
import img4 from "../../assets/images/majeed-profile.png";


const teamMembers = [
  {
    imgUrl: img1,
    name: "Waleed Muniri",
    position: "Founder & CEO",
  },
  {
    imgUrl: img2,
    name: "Prathmesh Gaikwad",
    position: "Co-Founder & CTO",
  },
  {
    imgUrl: img3,
    name: "Abdulrahman M ",
    position: "Co-Founder & COO",
  },
  {
    imgUrl: img4,
    name: "Abdul Majeed",
    position: "Tech Advisor",
  },
];

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
            <div className="team__item unique-team-item" key={index}>
              <div className="team__img unique-team-img">
                <img src={item.imgUrl} alt={item.name} />
              </div>
              <div className="team__details unique-team-details">
                <h4>{item.name}</h4>
                <p className="description unique-description">
                  {item.position}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
