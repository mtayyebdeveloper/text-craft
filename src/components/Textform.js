import React, { useState } from "react";

export default function Textform(props) {
  let [text, updatetext] = useState("");

  let btnuppercase = () => {
    let newtext = text.toUpperCase();
    updatetext(newtext);
    props.alarts("Success", "Text converted to UpperCase");
  };

  let speakTextBtn = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  let btnlowercase = () => {
    let newtext = text.toLowerCase();
    updatetext(newtext);
    props.alarts("Success", "Text converted to LowerCase");
  };

  let textchanged = (event) => {
    updatetext(event.target.value);
  };

  let copytext = () => {
    let textbox = document.getElementById("text");
    textbox.select();
    // navigator.clipboard.writeText(text)
    document.execCommand("copy");
    props.alarts("Success", "Your text has copyed");
  };

  let removespaces = () => {
    let newtext = text.split(/[ ]+/);
    updatetext(newtext.join(" "));
    props.alarts("Success", "Removed extra spaces from your text");
  };
  let cleartext = () => {
    let newtext = (text = "");
    updatetext(newtext);
    props.alarts("Success", "Your text has cleared");
  };

  return (
    <>
      <div className="container pt-3">
        <h1
          className={`text-${props.lightmood === "light" ? "dark" : "light"}`}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className={`form-control ${props.lightmood==="light"?"box-black":"box-white"} text-${
              props.lightmood === "light" ? "dark" : "light"
            }`}
            style={{
              backgroundColor:
                props.lightmood === "light" ? "white" : "rgb(64,65,69)",
            }}
            id="text"
            rows="5"
            onChange={textchanged}
            value={text}
            placeholder="Enter your text here..."
          ></textarea>
        </div>
        <div className="submits-btn d-flex flex-wrap gap-2">
          <button
            disabled={text.length === 0}
            onClick={speakTextBtn}
            className="btn btn-outline-warning"
          >
            Speak
          </button>
          <button
            disabled={text.length === 0}
            onClick={btnuppercase}
            className="btn btn-outline-warning"
          >
            Uppercase
          </button>
          <button
            disabled={text.length === 0}
            onClick={btnlowercase}
            className="btn btn-outline-warning"
          >
            Lowercase
          </button>
          <button
            disabled={text.length === 0}
            onClick={copytext}
            className="btn btn-outline-warning"
          >
            Copy
          </button>
          <button
            disabled={text.length === 0}
            onClick={removespaces}
            className="btn btn-outline-warning"
          >
            remove extra spaces
          </button>
          <button
            disabled={text.length === 0}
            onClick={cleartext}
            className="btn btn-outline-warning"
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className={`container mt-3 text-${
          props.lightmood === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Your text preview</h2>
        <p>
          {text === ""
            ? "Enter somthing in the textbox above to preview here"
            : text}
        </p>
      </div>
    </>
  );
}
