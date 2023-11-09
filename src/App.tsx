import "./SCSS/main.css";
import React, { useEffect } from "react";

import Header from "./Layouts/Header";
import Body from "./Layouts/Body";
import Footer from "./Layouts/Footer";
import Slider from "./Layouts/Slider";

// logo image
import account from "./Image/account.png";
import cart from "./Image/shopping-cart.png";
import logo from "./Image/appliedNutrition-log.png";




function App() {
  return (
    <>
      <Header account={account} cart={cart} logo={logo}></Header>
      <Slider></Slider>
      <Body title="Experience New Product"></Body>
      <Footer></Footer>
    </>
  );
}

export default App;
