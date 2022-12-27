import Contact from "./assets/Contact";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Portfolio from "./Component/Portfolio";
import SocialLinks from "./Component/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
