import Images from "Contants/images";
import { useEffect } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import Typed from "typed.js";
import "./Hero.scss";

function Hero() {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: ["Frontend Developer", "Web Developer"],
      startDelay: 100,
      backDelay: 1000,
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: false,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero">
      <div className="container m-auto px-20 max-sm:px-6">
        <div className="flex align-center justify-between max-sm:flex-col max-sm:flex-col-reverse max-sm:items-center">
          <div className="hero__intro">
            <div className="flex justify-center flex-col">
              <h2 className="hero__title text-white max-lg:text-7xl max-lg:leading-normal">
                Hi There, <br />
                <p>
                  I'm <span className="text-green-600">Hoang Phuc</span>
                </p>
              </h2>
              <span className="text-white text-5xl font-medium max-lg:text-4xl ">
                I Am Into {""}
                <span className="typed text-amber-500"></span>
              </span>
            </div>
            <button
              className="primary-button button-hero mt-12 bg-green-600 text-white"
              onClick={() => {
                window.location.href = "#about";
              }}
            >
              About Me
              <FaArrowCircleDown className="hero__icon ml-2 duration-300 ease-in-out" />
            </button>
          </div>
          <div className="hero__avatar">
            <img src={Images.avatar} alt="Avatar" />
          </div>
        </div>
      </div>
      <ul className="hero__circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}

export default Hero;
