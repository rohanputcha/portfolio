// App.js

import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainBox from "./components/MainBox/MainBox";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainBox />
    </div>
  );
}

export default App;
