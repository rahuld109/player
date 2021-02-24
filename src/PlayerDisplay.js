import React from "react";
import "./PlayerDisplay.css";

function PlayerDisplay(props) {
  const { players } = props;

  if (players.length > 0) {
    return players.map((player, index) => {
      console.log(player);
      return (
        <div className="player__container" key={player.Id}>
          <img
            className="player__image"
            key={player.Id}
            src={`./images/${player.Id}.jpg`}
            alt="Unavailable"
          />
          <div className="player__name">
            <h3>{player.PFName}</h3>
            <h3 className="skill__badge">{player.SkillDesc}</h3>
          </div>
        </div>
      );
    });
  } else {
    return <h3>No Player Data yet</h3>;
  }
}

export default PlayerDisplay;
