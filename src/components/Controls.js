import React from "react";

function Controls({ mapKeys, count, matchCount }) {
  return (
    <div className="row justify-content-center">
      {
        //Check if message failed
        count === matchCount ? (
          <input
            type="text"
            className="gameText w-fit-content border-0 p-2"
            placeholder="Start"
            onKeyDown={mapKeys}
            tabIndex="0"
            disabled
          />
        ) : (
          <input
            type="text"
            className="gameText w-fit-content border-0 p-2"
            placeholder="Start"
            onKeyDown={mapKeys}
            tabIndex="0"
          />
        )
      }
    </div>
  );
}

export default Controls;
