import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownLanguage from "./DropdownLanguage";
import DropdownUser from "./DropdownUser";
import DropdownThread from "./DropdownThread";
import AppContext from "../../utils/AppContext";

function NavBar() {
  const { login, setLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    setLogin(false);
    navigate("/");
  };
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
              <DropdownThread />
            </li>
          </ul>
          <form className="d-flex me-2">
            <div className="d-flex input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
        <DropdownLanguage />
        {login ? (
          <DropdownUser logout={logout} />
        ) : (
          <Link className="link-primary" to="/auth/login">
            Đăng nhập/Đăng ký
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
