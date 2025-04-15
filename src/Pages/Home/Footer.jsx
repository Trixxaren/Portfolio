import { Link } from "react-scroll";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./favicon-32x32.png" alt="Robin Vikström Logo" />
        </div>
        <div className="footer--madeby">
          <ul>
            <li>
              <p>
                <strong>Kontaktuppgifter</strong>
              </p>
              robin.m.e.vikstrom@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/robin-vikstr%C3%B6m-9959b6169/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={32} />
              </a>

              <a
                href="https://github.com/Trixxaren"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <p>
        Portfolio made by <strong>Robin Vikström</strong> with{" "}
        <strong>React.js</strong>
      </p>
    </footer>
  );
};

export default Footer;
