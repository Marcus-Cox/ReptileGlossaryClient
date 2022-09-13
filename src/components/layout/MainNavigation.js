import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div> Reptile Guides</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Guides</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
