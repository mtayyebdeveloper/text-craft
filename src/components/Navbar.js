import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.lightmood} bg-${props.lightmood} px-3`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.site_title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our porfilio
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      My projects
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      About me
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch d-flex justify-content-center align-item-center text-${props.lightmood === 'light'?'dark':'light'}`}>
              <input
                className="form-check-input fs-5"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.lightbtn}
              />
              <label
                className="form-check-label pt-1 ps-2"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btntext}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}