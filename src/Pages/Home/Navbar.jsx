import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive((v) => !v);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        {" "}
        <div>
          <img className="logotype" src="/favicon-32x32.png" alt="RV Logo" />{" "}
        </div>
        <button
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
          aria-label="Öppna meny"
          aria-expanded={navActive}
          aria-controls="navMenu"
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </button>
        <div
          id="navMenu"
          className={`navbar--items ${navActive ? "active" : ""}`}
        >
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Hem
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                Projekt
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="navbar--content"
              >
                Om mig
              </Link>
            </li>
          </ul>
        </div>
        <Link
          onClick={closeMenu}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-outline-primary"
        >
          Kontakta mig
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
