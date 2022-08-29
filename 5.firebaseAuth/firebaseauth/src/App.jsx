import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Inicio} from "./components/Inicio";
import {Admin} from "./components/Admin";
import {Login} from "./components/Login";
import {Menu} from "./components/Menu";

function App() {
  return (
    <div className="container">
      <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Inicio/>}></Route>
          <Route exact path="/admin" element={<Admin/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
