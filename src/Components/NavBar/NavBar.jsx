import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <ul className="navbar__menu">
            <Link className="navbar__li" to='/counter'>Счётчик</Link>
            <Link className="navbar__li" to="/modal">Попап</Link>
            <Link className="navbar__li" to="/quiz">Квиз</Link>
            <Link className="navbar__li" to="/users">Инвайты</Link>
            <Link className="navbar__li" to="/converter">Конвертер</Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
