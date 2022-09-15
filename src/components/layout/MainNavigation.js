import { Link } from "react-router-dom";
import React from "react";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Reptile Guides</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Guides</Link>
          </li>
          <li>
            <Link to="/new-reptile-guide">New Reptile Guides</Link>
          </li>
          <li>
            <Link to="/new-specialneedsreptile-guide">New Special Needs Reptile Guides</Link>
          </li>
          <li>
            <Link to="/new-reptilediet-guide">New Reptile Diet Guides</Link>
          </li>
          <li>
            <Link to="favorite-guides">Favorite Guides</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
