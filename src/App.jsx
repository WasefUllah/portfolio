import "./App.css";
import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="roboto relative ">
     <Navbar></Navbar>
     <Hero></Hero>
     <AboutMe></AboutMe>
    </div>
  );
}

export default App;
