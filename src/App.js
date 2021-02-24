import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PlayerDisplay from "./PlayerDisplay";

function App() {
  const [players, getPlayers] = useState("");
  const [teams, getTeams] = useState("");
  const url = "https://api.npoint.io/d6bd0efc05639084eb17/";
  const getAllPlayers = () => {
    axios
      .get(`${url}`)
      .then((resp) => {
        const PlayerData = resp.data.playerList;
        const TeamData = resp.data.teamsList;
        getPlayers(PlayerData);
        getTeams(TeamData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <>
      <h1 align="center">Football Players ⚽</h1>
      <div className="player__Display">
        <PlayerDisplay players={players} teams={teams} />
      </div>
    </>
  );
}

export default App;
