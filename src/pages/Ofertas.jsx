const ofertas = [
  {
    nome: "Pacotes nacionais",
    descricao: "Descubra destinos brasileiros para suas férias.",
    imagem: "/images/Pacotes nacionais.png",
    alt: "Imagem representativa de pacotes de viagens nacionais",
  },
  {
    nome: "Pacotes internacionais",
    descricao: "Explore novas culturas e conheça outros países.",
    imagem: "/images/Pacotes internacionais.png",
    alt: "Imagem representativa de pacotes de viagens internacionais",
  },
  {
    nome: "Viagens completas",
    descricao: "Consulte opções com serviços para sua viagem.",
    imagem: "/images/Viagens completas.png",
    alt: "Imagem representativa de uma viagem completa",
  },
];

function Ofertas() {
  return (
    <section className="content-page">
      <header className="page-heading">
        <span className="section-kicker">CONNECTFLIGHT</span>

        <h1>
          Nossas <span>ofertas</span>
        </h1>

        <p>
          Encontre opções de pacotes completos para planejar
          suas próximas férias.
        </p>
      </header>

      <div className="offer-grid">
        {ofertas.map((oferta) => (
          <article className="offer-card" key={oferta.nome}>
            <div className="offer-art">
              <img
                src={oferta.imagem}
                alt={oferta.alt}
                loading="lazy"
              />
            </div>

            <div className="offer-info">
              <h2>{oferta.nome}</h2>

              <p>{oferta.descricao}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="disclaimer">
        Consulte as condições e a disponibilidade dos pacotes.
      </p>
    </section>
  );
}

export default Ofertas;