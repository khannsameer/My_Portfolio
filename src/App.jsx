import { BrowserRouter } from "react-router-dom";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
// import Experience from "../src/components/Experience";
import Feedbacks from "../src/components/Feedbacks";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Tech from "../src/components/Tech";
import Wroks from "../src/components/Works";
import Stars from "./components/canvas/Stars";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          {/* <Experience /> */}
          <Tech />
          <Wroks />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <Stars />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
