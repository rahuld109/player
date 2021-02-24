import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PlayerDisplay from "./PlayerDisplay";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [players, getPlayers] = useState("");

  const url = "https://api.npoint.io/d6bd0efc05639084eb17/";

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

      <div className="player__Display">
        <PlayerDisplay players={players} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
