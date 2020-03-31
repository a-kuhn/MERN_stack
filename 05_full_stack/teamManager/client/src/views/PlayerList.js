import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

export default props => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then(res => setPlayers(res.data))
      .catch(console.log);
  }, []);

  const deletePlayer = deleteId => {
    axios
      .delete("http://localhost:8000/api/players/" + deleteId)
      .then(res => {
        const filteredPlayers = players.filter(
          player => player._id != deleteId
        );
        setPlayers(filteredPlayers);
      })
      .catch(console.log);
  };

  return (
    <div className="divBorder m-3 p-3">
      <div>
        <Link to="/players/list">List</Link>
        <span> | </span>
        <Link to="/players/addplayer">Add Player</Link>
      </div>
      <table className="divBorder m-2 table-striped">
        <thead className="header-bg-color">
          <tr>
            <th scope="col">Player Name</th>
            <th scope="col">Preferred Position</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => {
            return (
              <tr key={player._id}>
                <td>{player.name}</td>
                <td>{player.preferredPosition}</td>
                <td>
                  <button
                    onClick={e => {
                      deletePlayer(player._id);
                    }}
                    className="deleteButton"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
