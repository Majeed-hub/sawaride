// // Section.js
// import React from "react";
// import "./index.css"; // Optional: add styles for the section
// import Button from "../../components/button/index";


// function Section({ title, content, imageUrl, dark }) {
//   return (
//     <section className={`section ${dark ? "section-dark" : ""}`}>
//       <div className="section-content">
//         <div className="text-content">
//           <h2>{title}</h2>
//           <p>{content}</p>
//           <Button />
//         </div>
//         <div className="image-content">
//           <img src={imageUrl} alt={title} />
//         </div>
//       </div>
//     </section>
//   );
// }

// Section.js
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Rellax from "rellax";
import "./index.css";



function Section({ title, content, imageUrl, dark }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    // new Rellax(".image-content img", {
    //   speed: -3,
    //   center: true,
    // });
  }, []);

  return (
    <section className={`section ${dark ? "section-dark" : ""}`} >
      <div className="section-content">
        <div
          className="text-content"
          data-aos="slide-up" // Apply slide in effect
        >
          <h2>{title}</h2>
          <p>{content}</p>
         
        </div>
        <div className="image-content" data-aos="zoom-in"> {/* Apply zoom effect */}
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </section>
  );
}

export default Section;
