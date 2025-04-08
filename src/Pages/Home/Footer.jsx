import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./favicon-32x32.png" alt="Logoipsum" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Hem
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                Om mig
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li></li>
            <li></li>
            <li>
              <a
                href="https://www.linkedin.com/in/robin-vikstr%C3%B6m-9959b6169/"
                class="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="black"
                    d="M4.98 3C4.98 3 5.02 3 5.02 3C5.02 3 5.02 3 5.02 3C4.45 3 4 3.45 4 4C4 4.55 4.45 5 5 5C5.55 5 6 4.55 6 4C6 3.45 5.55 3 5 3C4.98 3 4.98 3 4.98 3ZM3 20V9H6V20H3ZM22 20H18V13C18 11.89 17.11 11 16 11C14.89 11 14 11.89 14 13V20H11V9H14V11H16V9H19V9H22C22 9 22 20 22 20Z"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/Trixxaren"
                class="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.53 2.29 6.53 5.44 7.61.4.07.55-.17.55-.38v-1.38c-2.23.48-2.7-1.06-2.7-1.06-.36-.92-.88-1.17-.88-1.17-.72-.48.06-.47.06-.47.8 0 1.21.76 1.21.76.72 1.21 1.88.86 2.34.66.07-.52.28-.86.5-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.13-.08-.2-.35-.98.07-2.05 0 0 .66-.21 2.16.82.63-.18 1.3-.27 1.97-.27.67 0 1.34.09 1.97.27 1.5-1.03 2.16-.82 2.16-.82.42 1.07.14 1.85.07 2.05.51.55.82 1.26.82 2.13 0 3.06-1.86 3.75-3.64 3.95.28.24.52.72.52 1.41v2.1c0 .21.15.46.55.38C13.71 14.53 16 11.53 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
