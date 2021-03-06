import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";
import ShopPage from "./Shop/ShopPage";
import Header from "./Shared/Navigation/Header";

import "./assets/style/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
