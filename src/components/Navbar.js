import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.lightmood} bg-${props.lightmood==="light"?"white":"dark"} px-3 py-2`}
      >
        <div className="container-fluid d-flex justify-content-between align-item-center">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              {props.site_title}
            </Link>
          </div>

          <div id="navbarSupportedContent">
            <div
              className={`form-check form-switch d-flex justify-content-center fs-5 pt-1 align-item-center text-${
                props.lightmood === "light" ? "dark" : "light"
              }`}
            >
             
              <i
                className={`fa-solid cursor-pointer ${
                  props.lightmood === "light" ? "fa-moon" : "fa-sun"
                }`}
                onClick={props.lightbtn}
              ></i>
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
