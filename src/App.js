
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "./Animation/CartContext";

import Home from "./Animation/Home";
import Shop from "./Animation/Shop";
import Cart from "./Animation/Cart";
import Login from "./Animation/Login";
import Healthcare from "./Animation/Healthcare";
import Directors from "./Animation/Directors";
import DirectorsTree from "./Animation/DirectorsTree";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
                    <Route path="/health" element={<Healthcare />} />
                    <Route path="/direct" element={<Directors />} />
                    <Route path="/directtree" element={<DirectorsTree />} />


        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
