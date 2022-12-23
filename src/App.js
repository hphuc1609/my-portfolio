import Content from "Components/Content";
import Footer from "Components/Footer/Footer";
import GoToTop from "Components/GoToTop";
import Hero from "Components/Hero/Hero";
import Navbar from "Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
