//libraries
import React from "react";
import Bottommain from "../section/Bottommain";
import CarouselDemo from "../section/Carousel";
import Centermain from "../section/Centermain";
import Footer from "../section/Footer";
import Header from "../section/Header";
import HeroBox from "../section/HeroBox";

//components
import NavBar from "../section/NavBar";
import Topmain from "../section/Topmain";

function Landing() {
  return (
    <div className="w-full flex flex-col items-center">
      <NavBar />
      <Header />
      <HeroBox />
      <CarouselDemo />
      <Topmain />
      <Centermain />
      <Bottommain />
      <Footer />
    </div>
  );
}

export default Landing;
