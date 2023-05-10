import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <>
    <nav className="navbar navbar-expand-lg menu">
  <div className="container-fluid">
  <Link className="nav-link" to="/"><h3>Doble Porcion</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/integrantes">Integrates</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tienda">Tienda</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/musica">Musica</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/fans">Fans</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/hooks">Hooks</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
