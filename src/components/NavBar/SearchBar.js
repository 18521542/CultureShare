import React from "react";

function SearchBar(props) {
  const { isOpen, toggle } = props;
  return (
    <div className={`position-relative py-1 ${isOpen ? "w-100" : null}`}>
      <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
        <i className="fas fa-search fa-lg"></i>
      </span>
      <input type="text" className={`bg-light form-control border-0 ps-5 h-100 ${isOpen ? "w-100" : null}`} placeholder="Ask a question..." />
      <a className="position-absolute top-50 end-0 translate-middle-y me-2" onClick={toggle}>
        <i className="fas fa-times fa-lg"></i>
      </a>
    </div>
  );
}

export default SearchBar;
