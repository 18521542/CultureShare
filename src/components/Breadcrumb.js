import React from "react";

function Breadcrumb(props) {
  const { title, parent, parent2, parent3, active } = props;

  return (
    <div className="row">
      <div className="col-12 mb-2">
        <h2 className="float-start me-4 mb-0">{title}</h2>
        <nav aria-label="breadcrumb" className="d-flex align-items-center h-100">
          <ol class="breadcrumb mb-0">
            {parent && (
              <li class="breadcrumb-item">
                <a href="#">{parent}</a>
              </li>
            )}
            {parent2 && (
              <li class="breadcrumb-item">
                <a href="#">{parent2}</a>
              </li>
            )}
            {parent3 && (
              <li class="breadcrumb-item">
                <a href="#">{parent3}</a>
              </li>
            )}
            {active && (
              <li class="breadcrumb-item active" aria-current="page">
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
