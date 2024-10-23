// Section.js
import React from "react";
import "./index.css"; // Optional: add styles for the section
import Button from "../../components/button/index";


function Section({ title, content, imageUrl, dark }) {
  return (
    <section className={`section ${dark ? "section-dark" : ""}`}>
      <div className="section-content">
        <div className="text-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <Button />
        </div>
        <div className="image-content">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </section>
  );
}

export default Section;
