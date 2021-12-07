import React from "react";

function DropdownNotification() {
  return (
    <div className="dropdown">
      <a
        className="nav-link position-relative"
        href="#"
        id="dropdown-notify"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="position-absolute translate-middle badge rounded-pill bg-danger fw-bold" style={{fontSize: 10, left:25}}>
          9
          <span className="visually-hidden">unread messages</span>
        </span>
        <i className="fas fa-bell fa-lg"></i>
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdown-notify">
        <a className="dropdown-item" href="#">
          Nothing
        </a>
        <a className="dropdown-item" href="#">
          Nothing
        </a>
        <a className="dropdown-item" href="#">
          Nothing
        </a>
        <a className="dropdown-item" href="#">
          Nothing
        </a>
      </div>
    </div>
  );
}

export default DropdownNotification;
