import React from "react";

function GameField({ gameEvent, count, matchCount }) {
  return (
    <div className="text-white col-8 h-100">
      {
        //Check if message failed
        count === matchCount ? (
          <h6>{gameEvent.description}</h6>
        ) : (
          <h5>continue...</h5>
        )
      }
    </div>
  );
}

export default GameField;
