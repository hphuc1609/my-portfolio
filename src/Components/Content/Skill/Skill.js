import { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import "./Skill.scss";

function Skills() {
  const [scrolled, setSrolled] = useState(false);

  useEffect(() => {
    const mySkill = document.querySelector("#skill");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > mySkill.offsetTop - 200) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skill" className={scrolled ? "skill active" : "skill"}>
      <div className="container m-auto px-6 py-20 overflow-hidden">
        <h2 className="flex items-center justify-center text-white text-6xl font-bold max-sm:text-5xl">
          <FaLaptopCode className="mr-4" />
          Skills & <span className="text-green-600 ml-4">Abilities</span>
        </h2>
        <div className="skill__list bg-neutral-900">
          <div className="skill__item">
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              alt="ReactJS"
            />
            <span className="skill__item-name text-white">ReactJS</span>
          </div>
          <div className="skill__item">
            <img src="https://img.icons8.com/color/48/000000/redux.png" alt="Redux" />
            <span className="skill__item-name text-white">Redux</span>
          </div>
          <div className="skill__item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
              alt="TailwindCSS"
            />
            <span className="skill__item-name text-white">Tailwind CSS</span>
          </div>
          <div className="skill__item">
            <img src="https://img.icons8.com/color/48/null/bootstrap.png" alt="Bootstrap" />
            <span className="skill__item-name text-white">Bootstrap</span>
          </div>
          <div className="skill__item">
            <img src="https://img.icons8.com/color/48/000000/sass.png" alt="Sass" />
            <span className="skill__item-name text-white">Sass</span>
          </div>
          <div className="skill__item">
            <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" />
            <span className="skill__item-name text-white">HTML5</span>
          </div>
          <div className="skill__item">
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
            <span className="skill__item-name text-white">CSS3</span>
          </div>
          <div className="skill__item">
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" />
            <span className="skill__item-name text-white">JavaScript</span>
          </div>
          <div className="skill__item">
            <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git VCS" />
            <span className="skill__item-name text-white">Git VCS</span>
          </div>
          <div className="skill__item">
            <img src="https://img.icons8.com/glyph-neue/48/ffffff/github.png" alt="GitHub" />
            <span className="skill__item-name text-white">GitHub</span>
          </div>
          <div className="skill__item">
            <img
              src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67"
              alt="Vercel"
            />
            <span className="skill__item-name text-white">Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
