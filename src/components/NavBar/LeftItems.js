import React from "react";

function LeftItems() {
  return (
    <div className="bookmark-wrapper d-flex align-items-center my-2">
      <a className="navbar-brand fw-bold" href="#">
        Culture Share
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftItems;
