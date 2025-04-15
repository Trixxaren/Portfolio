import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa"; // Font Awesome för ikoner
import { MdDesignServices } from "react-icons/md"; // Material Design för Design
import { MdTextFields } from "react-icons/md"; // Miro, som alternativ ikon

const MySkills = () => {
  return (
    <section id="MinaKunskaper" className="skills-section">
      <h1 className="skills--section--heading">Mina kunskaper</h1>

      <div className="skills-container">
        {/* HTML Icon */}
        <div className="skill-item">
          <FaHtml5 size={48} />
          <p>HTML</p>
        </div>

        {/* CSS Icon */}
        <div className="skill-item">
          <FaCss3Alt size={48} />
          <p>CSS</p>
        </div>

        {/* JavaScript Icon */}
        <div className="skill-item">
          <FaJsSquare size={48} />
          <p>JavaScript</p>
        </div>

        {/* React Icon */}
        <div className="skill-item">
          <FaReact size={48} />
          <p>React</p>
        </div>

        {/* Figma Icon - Using MdDesignServices as a design alternative */}
        <div className="skill-item">
          <MdDesignServices size={48} />
          <p>Figma</p>
        </div>

        {/* GitHub Icon */}
        <div className="skill-item">
          <FaGithub size={48} />
          <p>GitHub</p>
        </div>

        {/* Miro Icon */}
        <div className="skill-item">
          <MdTextFields size={48} /> {/* Alternativ ikon för Miro */}
          <p>Miro</p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
