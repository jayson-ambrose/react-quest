import React from "react";

function Controls({ mapKeys }) {
  return (
    <div className="position-absolute top-100 start-50 translate-middle">
      <input
        type="text"
        className="gameText bg-transparent border-0"
        placeholder="Start"
        onKeyDown={mapKeys}
        tabIndex="0"
      />
    </div>
  );
}

export default Controls;
