import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div> 
  );
}

export default App;
