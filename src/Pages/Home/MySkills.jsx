import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa"; // Font Awesome för ikoner
import { SiTailwindcss, SiNpm } from "react-icons/si";

// SVG för Figma
const FigmaIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 256 384"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="black" d="M128 128a64 64 0 1 0 0-128H64a64 64 0 0 0 0 128z" />
    <path fill="black" d="M128 128a64 64 0 1 1 0 128h-64a64 64 0 0 1 0-128z" />
    <path fill="black" d="M128 0h64a64 64 0 0 1 0 128h-64V0z" />
    <path fill="black" d="M128 256a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" />
    <path fill="black" d="M128 128h64a64 64 0 0 1 0 128h-64v-128z" />
  </svg>
);

// SVG för Miro
const MiroIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="black"
      d="M60 30L30 160l50 25L60 30zm60 0l-30 130 50 25L120 30zm60 0l-30 130 50 25L180 30z"
    />
  </svg>
);

const MySkills = () => {
  return (
    <section className="skills-section">
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
          <FigmaIcon />
          <p>Figma</p>
        </div>

        {/* GitHub Icon */}
        <div className="skill-item">
          <FaGithub size={48} />
          <p>GitHub</p>
        </div>

        {/* Miro Icon */}
        <div className="skill-item">
          <MiroIcon />
          <p>Miro</p>
        </div>
        <div className="skill-item">
          <SiTailwindcss size={48} />
          <p>Tailwind</p>
        </div>
        <div className="skill-item">
          <SiNpm size={48} />
          <p>NPM</p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
