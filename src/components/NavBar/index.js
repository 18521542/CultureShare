import React from "react";
import { Link } from "react-router-dom";
import useToggle from "../../utils/hooks/useToggle";
import DropdownNotification from "./DropdownNotification";
import DropdownLanguage from "./DropdownLanguage";
import DropdownUser from "./DropdownUser";

function NavBar() {
  const [isOpen, toggle] = useToggle(false);
  console.log(isOpen);
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <Link className="navbar-brand culture-font" to="/">
            Culture Share
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div className="d-flex input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
        <DropdownNotification />
        <DropdownLanguage />
        <DropdownUser />
      </div>
    </nav>
  );
}

export default NavBar;
