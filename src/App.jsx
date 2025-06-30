import "./App.css";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="roboto relative ">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
    </div>
  );
}

export default App;
