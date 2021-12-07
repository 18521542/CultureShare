import React from "react";

function DropdownUser() {
  return (
    <div className="dropdown">
      <a
        class="btn btn-light d-flex align-items-center"
        id="dropdown-user"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <div class="d-sm-flex flex-column d-none align-items-end">
          <span class="fw-bolder">Jenny</span>
          <span class="fw-light" style={{fontSize: 13}}>Member</span>
        </div>
        <div className="position-relative">
          <img
            class="rounded-circle ms-2"
            src="./img/avatar-1.png"
            alt="avatar"
            height="40"
            width="40"
          />
          <span
            class="position-absolute bottom-0 end-0 rounded-circle"
            style={{ height: 10, width: 10, backgroundColor: "#28c76f" }}></span>
        </div>
      </a>
      <div class="dropdown-menu" aria-labelledby="dropdown-user">
        <a class="dropdown-item" href="#">
          <i class="mr-50" data-feather="user"></i> Profile
        </a>
        <a class="dropdown-item" href="#">
          <i class="mr-50" data-feather="mail"></i> Inbox
        </a>
        <a class="dropdown-item" href="#">
          <i class="mr-50" data-feather="check-square"></i> Task
        </a>
        <a class="dropdown-item" href="#">
          <i class="mr-50" data-feather="message-square"></i> Chats
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <i class="mr-50" data-feather="settings"></i> Settings
        </a>
        <a class="dropdown-item" href="#">
          <i class="mr-50" data-feather="credit-card"></i> Pricing
        </a>
        <a class="dropdown-item" href="#">
          <i class="mr-50" data-feather="help-circle"></i> FAQ
        </a>
        <a class="dropdown-item" href="#">
          <i class="mr-50" data-feather="power"></i> Logout
        </a>
      </div>
    </div>
  );
}

export default DropdownUser;
