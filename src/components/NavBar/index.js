import React from "react";
import LeftItems from "./LeftItems";
import RightItems from "./RightItems";
import useToggle from "../../utils/hooks/useToggle";
import SearchBar from "./SearchBar";

function NavBar() {
  const [isOpen, toggle] = useToggle(false);
  console.log(isOpen);
  return (
    <nav className="container header-navbar navbar align-items-center fixed-top navbar-expand-lg navbar-light">
      <div
        className="shadow d-flex justify-content-between bg-light w-100 rounded px-3"
        style={{ height: 62 }}>
        {isOpen ? (
          <SearchBar isOpen={isOpen} toggle={toggle} />
        ) : (
          <div className="d-flex justify-content-between w-100">
            <LeftItems />
            <RightItems toggle={toggle} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
