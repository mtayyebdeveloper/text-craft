import "./App.css";
import Alarts from "./components/Alarts";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  let [lightmood, updatelightmood] = useState("light");

  let lightbtn = () => {
    if (lightmood === "light") {
      updatelightmood("dark");
      document.body.style.backgroundColor = "rgb(64,65,69)";
      setalart("Success", "Dark mood is enabled");
    } else {
      updatelightmood("light");
      document.body.style.backgroundColor = "rgb(248,249,250)";
      setalart("Success", "Light mood is enabled");
    }
  };

  let [alart, updatalart] = useState(null);
  let setalart = (type, massage) => {
    updatalart({
      tp: type,
      msg: massage,
    });
    setTimeout(() => {
      updatalart(null);
    }, 1500);
  };

  return (
    <Router>
        <Navbar
          site_title="TextCraft"
          lightmood={lightmood}
          lightbtn={lightbtn}
        />
        <Alarts alarts={alart} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Textform
                heading="Enter the text for editing"
                lightmood={lightmood}
                alarts={setalart}
              />
            }
          />
        </Routes>
    </Router>
  );
}

export default App;
