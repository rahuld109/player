import React from "react";
import "./PlayerDisplay.css";

function PlayerDisplay(props) {
  const { players, searchTerm } = props;

  if (players.length > 0) {
    return players
      .filter(function (player) {
        if (searchTerm === "") {
          return player;
        } else if (
          player.PFName.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return player;
        }
      })
      .map((player, i) => {
        console.log(player);
        return (
          <div className="player__container" key={player.Id}>
            <div>
              <img
                className="player__image"
                key={player.Id}
                src={`./images/${player.Id}.jpg`}
                alt="Unavailable"
              />
            </div>
            <div className="player__name">
              <h3>{player.PFName}</h3>
              <h3 className="skill__badge">{player.SkillDesc}</h3>
            </div>
            <div className="player__info">
              <h3>💲{player.Value} Million </h3>
            </div>
            {player.UpComingMatchesList.map((match, i) => {
              return (
                <div className="match__container">
                  <div className="player__info" align="center" key={i}>
                    <h3>
                      {match.CCode ? match.CCode : "NA"} vs.{" "}
                      {match.VsCCode ? match.VsCCode : "NA"}
                    </h3>
                  </div>
                  <div className="upcoming__matches" align="center">
                    <div className="match__date">
                      {match.MDate ? match.MDate : "Not Available"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      });
  } else {
    return <h3>No Player Data Has Been Feteched Yet</h3>;
  }
}

export default PlayerDisplay;
