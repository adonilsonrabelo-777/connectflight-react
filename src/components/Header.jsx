
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="ConnectFlight - Página inicial">
          <span className="brand-icon">✈</span>
          <span>Connect<span className="brand-accent">Flight</span></span>
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/destinos">Destinos</NavLink>
          <NavLink to="/ofertas">Ofertas</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
