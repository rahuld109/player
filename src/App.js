import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PlayerDisplay from "./PlayerDisplay";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [players, getPlayers] = useState("");

  const url = process.env.URL;

  const getAllPlayers = () => {
    axios
      .get(`${url}`)
      .then((resp) => {
        const PlayerData = resp.data.playerList;
        getPlayers(PlayerData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllPlayers();
  }, []);

  var i = 1;

  return (
    <>
      <div className="search__container">
        <h1>Football Players ⚽</h1>

        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
      </div>
      <h1>{i === 1 ? "true" : "false"}</h1>
      <div className="player__Display">
        <PlayerDisplay players={players} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
