import React from "react";
import Map from "./Map";
import Stats from "./Stats";

function GameInfo() {
  return (
    <div className="text-white col-4 bg-img-info">
      <div className="row d-flex flex-column ">
        <Map />
        <Stats />
      </div>
    </div>
  );
}

export default GameInfo;
