import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";

import "./assets/style/App.css";

const ShopPage = () => (
  <div>
    <h1>SHOP PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
