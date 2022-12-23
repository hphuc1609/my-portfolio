import Images from "Contants/images";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import "./MyProject.scss";

function MyProject() {
  const [active, setActive] = useState("all");
  const [scrolled, setSrolled] = useState(false);

  useEffect(() => {
    const myProject = document.querySelector(".project");
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > myProject.offsetTop - 300) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleUpdatedActive = (newActive) => {
    setActive(newActive);
  };

  const getToLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="project" className={scrolled ? "project active" : "project"}>
      <div className="container m-auto py-20 px-6 overflow-hidden max-sm:px-6 ">
        <h2 className="flex items-center justify-center text-white text-6xl font-bold max-sm:text-5xl">
          <RiProjectorFill className="mr-4" />
          Projects <div className="text-green-600 ml-4">Made</div>
        </h2>
        <div className="project__menu">
          <div
            className={
              active === "javascript"
                ? "project__menu-item bg-green-600 hover:bg-green-600"
                : "project__menu-item hover:bg-green-600"
            }
            onClick={() => handleUpdatedActive("javascript")}
          >
            <span className="text-white">JavaScript</span>
          </div>
          <div
            className={
              active === "react"
                ? "project__menu-item bg-green-600 hover:bg-green-600"
                : "project__menu-item hover:bg-green-600"
            }
            onClick={() => handleUpdatedActive("react")}
          >
            <span className="text-white">React</span>
          </div>
          <div
            className={
              active === "api"
                ? "project__menu-item bg-green-600 hover:bg-green-600"
                : "project__menu-item hover:bg-green-600"
            }
            onClick={() => handleUpdatedActive("api")}
          >
            <span className="text-white">Restful API</span>
          </div>
          <div
            className={
              active === "all"
                ? "project__menu-item bg-green-600 hover:bg-green-600"
                : "project__menu-item hover:bg-green-600"
            }
            onClick={() => handleUpdatedActive("all")}
          >
            <span className="text-white">All</span>
          </div>
        </div>
        <div className="project__card">
          <div className="project__card-item">
            <img src={Images.the_band} alt="The Band Website" />
            <a href="https://hphuc1609.github.io/theband/" className="project__card-name" target="_blank">
              The Band
            </a>
          </div>
          <div className="project__card-item">
            <img src={Images.iron_man} alt="Iron Man Landing Page" />
            <a href="https://ironmandesign.vercel.app/" className="project__card-name" target="_blank">
              Iron Man Landing Page
            </a>
          </div>
          <div className="project__card-item">
            <img src={Images.movie_app} alt="Movie App" />
            <a href="https://netflixdesign.vercel.app/" className="project__card-name" target="_blank">
              Movie App
            </a>
          </div>
          <div className="project__card-item">
            <img src={Images.music_app} alt="Music APP" />
            <a href="https://musicdesign.vercel.app/" className="project__card-name" target="_blank">
              Music Player
            </a>
          </div>
          <div className="project__card-item">
            <img src={Images.restaurant} alt="Restaurant Website" />
            <a href="https://restaurantdesign.vercel.app/" className="project__card-name" target="_blank">
              Restaurant
            </a>
          </div>
          <div className="project__card-item">
            <img src={Images.portfolio} alt="Portfolio Website" />
            <a href="https://phucluu-portfolio.vercel.app/" className="project__card-name" target="_blank">
              My Portfolio
            </a>
          </div>
        </div>
        <button
          className="secondary-button text-white hover:text-green-600 hover:border-current"
          onClick={() => getToLink("https://github.com/hphuc1609")}
        >
          View all
          <FaArrowRight className="project__icon duration-300 ease ml-4" />
        </button>
      </div>
    </section>
  );
}

export default MyProject;
