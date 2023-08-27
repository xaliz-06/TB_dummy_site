import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/home_page/Home";
import Products from "./components/products/Products";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Products />
    </React.Fragment>
  );
}

export default App;
