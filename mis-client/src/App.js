import React from "react";
import NavBar from "./components/common/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./AppRoute";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <AppRoute />
      </Router>
    </div>
  );
};

export default App;
