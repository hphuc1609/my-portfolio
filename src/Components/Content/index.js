import About from "./About/About";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import MyProject from "./MyProject/MyProject";
import Skill from "./Skill/Skill";

function Content() {
  return (
    <div>
      <About />
      <Skill />
      <Education />
      <MyProject />
      <Contact />
    </div>
  );
}

export default Content;
