import React from "react";
import "./App.css";
import Movies from "./components/Movies/movies";
import NavBar from "./components/Movies/navBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Movies />
    </div>
  );
}

export default App;
