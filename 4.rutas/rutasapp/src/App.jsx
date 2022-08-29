import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Usuarios } from "./components/Usuarios";
import { User } from "./components/User";

function App() {
  return (
    <Router>
      <Link to="/">Usuarios</Link>
      {/* <Link to="/inicio">Inicio</Link> */}

      <Routes>
        <Route exact path="/"       element={<Usuarios/>}></Route>
        <Route exact path="/usuario/:id"       element={<User/>}></Route>
        {/* <Route exact path="/inicio/:nombre" element={<Inicio/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
