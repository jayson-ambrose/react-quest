import React from "react";
import GameField from "./GameField";
import GameInfo from "./GameInfo";

function GameData({ count, matchCount, gameEventData }) {
  const gameEvent = gameEventData.map((gameEvent) => {
    return (
      <GameField
        gameEvent={gameEvent}
        key={gameEvent.id}
        count={count}
        matchCount={matchCount}
      />
    );
  });
  return (
    <div className="">
      <div className="row">
        {gameEvent}
        <GameInfo />
      </div>
    </div>
  );
}

export default GameData;
