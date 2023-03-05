import React from "react";

function NavBar() {
  return (
    <div className="">
      <ul className="list-unstyled list-group list-group-horizontal justify-content-center">
        <li className="me-5">
          <button className="px-5 py-1 border">Game</button>
        </li>
        <li className="mx-5">
          <button className="px-5 py-1 border">High Scores/Stats</button>
        </li>
        <li className="ms-5">
          <button className="px-5 py-1 border">Create Feature</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
