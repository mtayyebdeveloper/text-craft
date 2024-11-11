import "./App.css";
import Alarts from "./components/Alarts";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  let [lightmood, updatelightmood] = useState("light");
  let [btntext, setbtntext] = useState("Enable dark mood");

  let lightbtn = () => {
    if (lightmood === "light") {
      updatelightmood("dark");
      setbtntext("Enable light mood");
      document.body.style.backgroundColor = "#042749";
      setalart("Success", "Dark mood is enabled");
    } else {
      updatelightmood("light");
      setbtntext("Enable dark mood");
      document.body.style.backgroundColor = "white";
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
          btntext={btntext}
        />
        <Alarts alarts={alart} />
        <Routes>
          <Route exact path="/about" element={<About lightmood={lightmood}/>} />
          <Route exact path="/contact" element={<Contact lightmood={lightmood}/>} />
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
