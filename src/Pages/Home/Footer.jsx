import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="container footer__inner">
        {" "}
        <div className="footer--link--container">
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
        <div className="footer--content--container">
          {" "}
          <p className="footer--content">
            Portfolio made by <strong>Robin Vikström</strong> with{" "}
            <strong>React.js</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
