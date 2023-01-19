import React, { useState } from "react";
import "./App.css";
import Homepage from "./Components/Assignment/homepage/homepage";
import Login from "./Components/Assignment/login/login";
import Register from "./Components/Assignment/register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Form/Navbar";
import Mons from "../src/Components/card/Mons";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <>
      <Navbar />
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                user && user._id ? (
                  <Homepage />
                ) : (
                  <Login setLoginUser={setLoginUser} />
                )
              }
            />
            <Route
              path="/login"
              element={<Login setLoginUser={setLoginUser} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/mons" element={<Mons />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
