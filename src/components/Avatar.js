import React from "react";

function Avatar(props) {
  const { image, title } = props;
  return (
    <div className="card border-0">
      <div className="d-flex g-0 align-items-center">
        <img
          src={image}
          style={{ height: 32, width: 32 }}
          className="img-fluid rounded-circle me-3"
          alt="..."
        />
        <h6 className="card-title m-0">{title}</h6>
      </div>
    </div>
  );
}

export default Avatar;
