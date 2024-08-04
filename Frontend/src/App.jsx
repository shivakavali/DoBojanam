import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

import "./index.css";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";

const App = () => {
  
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className="App">
        {login && <LoginPopUp setLogin = {setLogin}/>}
        <Navbar login={login} setLogin={setLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
