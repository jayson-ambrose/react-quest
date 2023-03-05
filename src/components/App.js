import React, { useState, useEffect } from "react";
import GameData from "./GameData";
import NavBar from "./NavBar";
import Controls from "./Controls";
const fetchUrl = "http://localhost:3001/events";

function App() {
  const [count, setCount] = useState(0);
  const [matchCount, setMatchCount] = useState(1);
  const [gameEventData, setGameEventData] = useState([]);
  console.log(count, matchCount);
  console.log(gameEventData);

  const mapKeys = (event) => {
    const arrowKeys = event.key;
    console.log(arrowKeys);
    setCount(Math.floor(Math.random() * 5) + 1);
    setMatchCount(Math.floor(Math.random() * 5) + 1);
  };

  useEffect(() => {
    fetch(fetchUrl)
      .then((resp) => resp.json())
      .then((gameEventData) => setGameEventData(gameEventData));
  }, []);

  return (
    <div>
      <NavBar />
      <GameData
        count={count}
        matchCount={matchCount}
        gameEventData={gameEventData}
      />
      <Controls mapKeys={mapKeys} />
    </div>
  );
}

export default App;
