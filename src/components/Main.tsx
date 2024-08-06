import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Feat from "./feat/Feat";
import Specs from "./specs/Specs";
import Dtype from "./dType/Dtype";
import Footer from "./footer/Footer";

function Main() {
  return (
    <div>
      <Header />
      <About />
      <Feat />
      <Specs />
      <Dtype />
      <Footer />
    </div>
  );
}

export default Main;
