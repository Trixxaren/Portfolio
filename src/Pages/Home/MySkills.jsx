import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNpm } from "react-icons/si";

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
    <section className="skills-section" id="skills">
      <div className="container skills__inner">
        {" "}
        <h2 className="skills-heading">Mina kunskaper</h2>
        <div className="skills-container">
          <div className="skill-item">
            <FaHtml5 size={48} />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt size={48} />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <FaJsSquare size={48} />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <FaReact size={48} />
            <p>React</p>
          </div>
          <div className="skill-item">
            <FigmaIcon />
            <p>Figma</p>
          </div>
          <div className="skill-item">
            <FaGithub size={48} />
            <p>GitHub</p>
          </div>
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
      </div>
    </section>
  );
};

export default MySkills;
