import React from "react";

function Breadcrumb(props) {
  const { title, parent, parent2, parent3, active } = props;

  return (
    <div className="row my-3">
      <div className="col-12 mb-2">
        <h2 className="float-start me-4 pe-4 mb-0 border-2 border-secondary border-end">{title}</h2>
        <nav aria-label="breadcrumb" className="d-flex align-items-center h-100">
          <ol className="breadcrumb mb-0">
            {parent && (
              <li className="breadcrumb-item">
                <a href="#">{parent}</a>
              </li>
            )}
            {parent2 && (
              <li className="breadcrumb-item">
                <a href="#">{parent2}</a>
              </li>
            )}
            {parent3 && (
              <li className="breadcrumb-item">
                <a href="#">{parent3}</a>
              </li>
            )}
            {active && (
              <li className="breadcrumb-item active" aria-current="page">
                {active}
              </li>
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;
