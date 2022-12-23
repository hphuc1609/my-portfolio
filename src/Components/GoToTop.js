import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function GoToTop() {
  const [scrolled, setSrolled] = useState(false);
  const goToTop = document.querySelector("#go-to-top");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setSrolled(true);
        goToTop.style.opacity = "1";
        goToTop.style.visibility = "visible";
        goToTop.style.transform = "translateY(0)";
      } else {
        setSrolled(false);
        goToTop.style.opacity = "0";
        goToTop.style.visibility = "hidden";
        goToTop.style.transform = "translateY(100px)";
      }
    });
  }, [scrolled]);

  const handleGoToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      id="go-to-top"
      className="w-16 h-16 fixed text-2xl rounded-full right-8 bottom-32 duration-500 ease-in-out"
      style={{ background: "#ffae00" }}
      onClick={handleGoToTop}
    >
      <FaChevronUp className="m-auto" />
    </button>
  );
}

export default GoToTop;
