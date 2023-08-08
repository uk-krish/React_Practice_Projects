import React, { useEffect, useState } from "react";
import Topnav from "./Components/Topnav";
import Nav from "./Components/Nav";
import Home_hero from "./Components/Home_hero";
import Benifit from "./Components/Benifit";
import Specilist from "./Components/Specilist";
import Choose_Plan from "./Components/Choose_Plan";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {(windowWidth>1000)?<Topnav/>:""}
      <Nav/>
      <Home_hero/>
      <Benifit/>
      <Specilist/>
      <Choose_Plan/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
