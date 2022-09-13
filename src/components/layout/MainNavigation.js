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
          <li>
            <Link to='/new-guide'>New Guides</Link>
            
          </li>
          <li>
            <Link to='favorite-guides'>Favorite Guides</Link>
            
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
