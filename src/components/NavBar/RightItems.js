import React from "react";
import DropdownLanguage from "./DropdownLanguage";
import DropdownUser from "./DropdownUser";
import DropdownNotification from "./DropdownNotification";

function RightItems(props) {
  const { toggle } = props;
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      <li className="nav-item me-2">
        <a className="nav-link" onClick={toggle}>
          <i className="fas fa-search fa-lg"></i>
        </a>
      </li>

      <li className="nav-item me-2">
          <DropdownNotification />
      </li>

      <li className="nav-item me-2">
        <DropdownLanguage />
      </li>

      <li className="nav-item me-2">
        <DropdownUser />
      </li>
    </ul>
  );
}

export default RightItems;
