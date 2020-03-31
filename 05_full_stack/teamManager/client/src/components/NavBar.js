import React from "react";
import { Link } from "@reach/router";

export default props => {
  return (
    <div className="m-3">
      <Link to="/players/list">Manage Players</Link>
      <span> | </span>
      <Link to="/status/game/1">Manage Player Status</Link>
    </div>
  );
};
