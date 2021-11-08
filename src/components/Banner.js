import React from "react";

function Banner() {
  return (
    <div id="banner" className="position-relative">
      <img className="img-fluid w-100" src="/img/Banner.png" />
      <div className="d-flex flex-column position-absolute top-50 start-50 translate-middle justify-content-center">
        <h4>Dedicated Source Used on Website</h4>
        <p className="fw-light text-center">Popular searches: Sales automation, Email marketing</p>
        <div className="position-relative">
          <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
            <i className="fas fa-search fa-sm"></i>
          </span>
          <input type="text" className="form-control form-control-sm ps-5" placeholder="Ask a question..." />
        </div>
      </div>
    </div>
  );
}

export default Banner;
