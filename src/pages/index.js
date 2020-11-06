import React, { useState } from "react";
import AboutSection from "../components/AboutSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/AboutSection/Data";
import Footer from "../components/footer";
import Landing from "../components/Main";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Landing />
      <AboutSection {...homeObjOne} />
      <AboutSection {...homeObjTwo} />
      <Services/>
      <AboutSection {...homeObjThree}/>
      <Footer/>
    </>
  );
};

export default Home;
