import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Articles from "./sections/Articles";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Certification from "./sections/Certification";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative animated-gradient text-white tech-grid-bg">
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      <CustomCursor />
      <Navbar />
      <BackToTop />

      {/* Intro always on top until it finishes */}
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {/* Homepage always present (masked reveal) */}
      <Home introDone={introDone} />

      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Articles />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}
