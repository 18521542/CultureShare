import React from "react";
import { Link } from "react-router-dom";

function DropdownUser({logout}) {
  
  return (
    <div className="dropdown me-2">
      <a
        className="btn btn-light d-flex align-items-center"
        id="dropdown-user"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <div className="d-sm-flex flex-column d-none align-items-end">
          <span className="fw-bolder">Jenny</span>
          <span className="fw-light" style={{fontSize: 13}}>Member</span>
        </div>
        <div className="position-relative">
          <img
            className="rounded-circle ms-2"
            src="/img/avatar-1.png"
            alt="avatar"
            height="40"
            width="40"
          />
          <span
            className="position-absolute bottom-0 end-0 rounded-circle"
            style={{ height: 10, width: 10, backgroundColor: "#28c76f" }}></span>
        </div>
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdown-user">
        <Link className="dropdown-item" to="/user">
          <i className="mr-50" data-feather="user"></i> Trang cá nhân
        </Link>
        <a className="dropdown-item" href="#">
          <i className="mr-50" data-feather="mail"></i> Tin nhắn
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          <i className="mr-50" data-feather="settings"></i> Cài đặt
        </a>
        <a className="dropdown-item" href="#">
          <i className="mr-50" data-feather="help-circle"></i> FAQ
        </a>
        <a className="dropdown-item" onClick={logout}>
          <i className="mr-50" data-feather="power"></i> Đăng xuất
        </a>
      </div>
    </div>
  );
}

export default DropdownUser;
