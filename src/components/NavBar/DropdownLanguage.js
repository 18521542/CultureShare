import React, { useState } from "react";

const languagesList = [
  {
    key: "us",
    name: "English"
  },
  {
    key: "fr",
    name: "French"
  },
  {
    key: "de",
    name: "German"
  },
  {
    key: "vn",
    name: "Vietnam"
  }
];
function DropdownLanguage() {
  const [language, setLanguage] = useState(languagesList[3]);

  return (
    <div className="dropdown">
      <a
        className="btn btn-light"
        id="dropdown-flag"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <i className={`flag-icon flag-icon-${language.key} me-1`}></i>
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdown-flag">
        <a className="dropdown-item" href="#" onClick={() => setLanguage(languagesList[0])}>
          <i className="flag-icon flag-icon-us"></i> English
        </a>
        <a className="dropdown-item" href="#" onClick={() => setLanguage(languagesList[1])}>
          <i className="flag-icon flag-icon-fr"></i> French
        </a>
        <a className="dropdown-item" href="#" onClick={() => setLanguage(languagesList[2])}>
          <i className="flag-icon flag-icon-de"></i> German
        </a>
        <a className="dropdown-item" href="#" onClick={() => setLanguage(languagesList[3])}>
          <i className="flag-icon flag-icon-vn"></i> Vietnam
        </a>
      </div>
    </div>
  );
}

export default DropdownLanguage;
