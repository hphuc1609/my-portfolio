import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.scss";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [show, handleShow] = useState(true);

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleToGetSection = () => {
    window.location.href = "#contact";
    console.log("Connected");
  };

  useEffect(() => {
    let scrollUp = window.pageYOffset;
    const transitionNavBar = () => {
      const scrollDown = window.pageYOffset;

      if (scrollUp > scrollDown) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      scrollUp = scrollDown;
    };
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <header className={show ? "header header-active" : "header"}>
      <div className="container m-auto px-20 max-sm:px-6">
        <div className="flex align-center justify-between">
          <div className="flex">
            <span className="header__logo text-white max-sm:text-5xl">
              Portfo<span className="text-green-600">lio</span>
            </span>
            <nav className="header__navbar ml-8 flex items-center">
              <ul className="header__navbar-list max-sm:hidden">
                <li className="header__navbar-item">
                  <a
                    href="#"
                    className={
                      activeLink === "home"
                        ? "header__navbar-link text-white"
                        : "header__navbar-link hover:text-white duration-300 ease"
                    }
                    onClick={() => updateActiveLink("home")}
                  >
                    Home
                  </a>
                </li>
                <li className="header__navbar-item">
                  <a
                    href="#skill"
                    className={
                      activeLink === "skill"
                        ? "header__navbar-link text-white"
                        : "header__navbar-link hover:text-white duration-300 ease"
                    }
                    onClick={() => updateActiveLink("skill")}
                  >
                    Skills
                  </a>
                </li>
                <li className="header__navbar-item">
                  <a
                    href="#project"
                    className={
                      activeLink === "project"
                        ? "header__navbar-link text-white"
                        : "header__navbar-link hover:text-white duration-300 ease"
                    }
                    onClick={() => updateActiveLink("project")}
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="header__socials max-sm:hidden">
              <a href="https://github.com/hphuc1609" className="header__social-link text-neutral-500 hover:text-white">
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/hphuc.luu/"
                className="header__social-link text-neutral-500 hover:text-white"
              >
                <FaFacebook />
              </a>
            </div>
            <button className="secondary-button header__btn text-white hover:text-black" onClick={handleToGetSection}>
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
