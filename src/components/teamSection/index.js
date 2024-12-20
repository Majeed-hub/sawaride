// Section.js
import React from "react";
import "./index.css"; // Optional: add styles for the section
import Team from "../team";

function TeamSection({ title, content, imageUrl, dark }) {
  return (
    <section className={`team-section ${dark ? "section-dark" : ""}`}>
      <div className="team-section-content">
        <div className="team-text-content">
          <Team />
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
