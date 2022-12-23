import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.scss";

function Education() {
  const [scrolled, setSrolled] = useState(false);

  useEffect(() => {
    const education = document.querySelector(".education");
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > education.offsetTop - 300) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="education" className={scrolled ? "education active bg-neutral-800" : "education bg-neutral-800"}>
      <div className="container m-auto pt-20 pb-32 px-6 overflow-hidden max-sm:px-6">
        <h2 className="flex items-center justify-center text-white text-6xl font-bold max-sm:text-5xl">
          <FaGraduationCap className="mr-4" />
          My <span className="text-green-600 ml-4">Education</span>
        </h2>
        <p className="text-white text-2xl font-normal mt-6 text-center">
          Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>
        <div className="education__item max-lg:w-full">
          <img
            src="https://tlus.edu.vn/wp-content/uploads/2019/08/VHA8814-1-310x165.jpg"
            alt="Education"
            className="w-1/3 h-auto max-sm:w-full"
          />
          <div className="p-8">
            <h3 className="text-4xl text-blue-800 font-semibold">Degree Of Engineer In Information Technology</h3>
            <p className="text-3xl text-neutral-700 mt-4">Thuy Loi university - Campus 2</p>
            <p className="text-3xl font-medium mt-4">2017-2022 | Pursuing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
