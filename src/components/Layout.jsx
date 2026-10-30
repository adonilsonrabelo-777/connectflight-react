
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const mostrarBotaoVoltar = [
    "/destinos",
    "/ofertas",
    "/contato",
  ].includes(location.pathname);

  return (
    <div className="app-shell">
      <main className="main-content">
        {mostrarBotaoVoltar && (
          <div className="back-home-wrap">
            <Link
              to="/"
              className="back-home-link"
              aria-label="Voltar para a página inicial"
              title="Voltar para o início"
            >
              <span className="back-home-arrow" aria-hidden="true">
                ←
              </span>
              <span>Voltar</span>
            </Link>
          </div>
        )}

        <Outlet />
      </main>

      <nav className="page-nav" aria-label="Navegação principal">
        <NavLink to="/destinos">Destinos</NavLink>
        <NavLink to="/ofertas">Ofertas</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>

      <Footer />
    </div>
  );
}

export default Layout;
