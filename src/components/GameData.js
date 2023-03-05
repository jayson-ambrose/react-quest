import React from "react";
import GameField from "./GameField";
import GameInfo from "./GameInfo";

function GameData({ count, matchCount, gameEventData }) {
  let id = Math.floor(Math.random() * 5) + 1;
  const gameEvent = gameEventData
    .filter((event) => event.id === id)
    .map((event) => (
      <GameField gameEvent={event} count={count} matchCount={matchCount} />
    ));
  return (
    <div className="row">
      {gameEvent}
      <GameInfo />
    </div>
  );
}

export default GameData;
