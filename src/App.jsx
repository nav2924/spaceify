import React, { useEffect } from "react";
import { Navbar } from "./components/index";
import Lenis from "lenis"
const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4,

    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
