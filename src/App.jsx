import "./App.css";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="roboto relative ">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
    </div>
  );
}

export default App;
