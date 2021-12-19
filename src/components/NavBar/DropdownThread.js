import React from "react";
import { Link } from 'react-router-dom';

function DropdownThread() {
  return (
    <div className="nav-item dropdown">
      <a
        className="active nav-link"
        id="dropdown-thread"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Chủ đề
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdown-thread">
        <Link className="dropdown-item" to="/france">
          Pháp
        </Link>
        <Link className="dropdown-item" to="/greece">
           Hy Lạp
        </Link>
        <Link className="dropdown-item" to="/vietnam">
           Việt Nam
        </Link>
        <Link className="dropdown-item" to="/japan">
           Nhật Bản
        </Link>
        <Link className="dropdown-item" to="/thailand">
           Thái Lan
        </Link>
        <Link className="dropdown-item" to="/singapore">
           Singapore
        </Link>
        <Link className="dropdown-item" to="/italia">
           Ý
        </Link>
      </div>
    </div>
  );
}

export default DropdownThread;
