import Images from "Contants/images";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import "./About.scss";

function About() {
  const [scrolled, setSrolled] = useState(false);

  useEffect(() => {
    const about = document.querySelector("#about");
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > about.offsetTop - 300) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className={scrolled ? "about active bg-neutral-800" : "about bg-neutral-800"}>
      <div className="container m-auto pt-20 pb-32 px-6 overflow-hidden">
        <h2 className="flex items-baseline justify-center text-white text-6xl font-bold max-sm:text-5xl ">
          <FaUserAlt className="mr-4" />
          About
          <span className="text-green-600 ml-4">Me</span>
        </h2>
        <div className="flex mt-32 max-sm:flex-col max-sm:items-center max-sm:mt-12">
          <div className="about__avatar ml-80 max-sm:ml-0 max-lg:ml-0">
            <img src={Images.avatar2} alt="Avatar" />
          </div>
          <div className="ml-40 px-12 text-white w-2/4 max-sm:px-0 max-sm:ml-0 max-sm:mt-8 max-lg:w-full max-lg:ml-8">
            <h3 className="about__name">I'm Phuc</h3>
            <span className="about__subtitle">Front End Developer</span>
            <p className="about__desc">
              I am an Information Technology from Thuy Loi University. I'm very passionate about improving my coding
              skills & developing applications & websites. I love build WebApps and Websites, working for myself to
              improve my skills.
            </p>
            <div className="about__info">
              <div className="about__info-item max-sm:flex max-sm:items-start max-sm:flex-col max-sm:gap-y-2">
                <span className="block text-2xl w-96 text-green-500">
                  Age: <span className="text-white">23</span>
                </span>
                <span className="block text-2xl w-96 text-green-500">
                  Email: <span className="text-white">phucluu1609@gmail.com</span>
                </span>
              </div>
              <div className="about__info-item mt-6 max-sm:flex max-sm:items-start max-sm:flex-col max-sm:mt-0 max-sm:gap-y-2">
                <span className="block text-2xl w-96 text-green-500 max-sm:mt-2">
                  Phone: <span className="text-white">(+84) 079-610-1169</span>
                </span>
                <span className="block text-2xl w-96 text-green-500">
                  Place: <span className="text-white">Ho Chi Minh City</span>
                </span>
              </div>
            </div>
            <button className="primary-button button-about mt-12 bg-green-600">
              Resume
              <GoChevronRight className="about__icon ml-1 duration-300 ease-in-out text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
