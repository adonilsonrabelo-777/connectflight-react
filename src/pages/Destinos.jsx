const destinos = [
  {
    nome: "Rio de Janeiro",
    pais: "Brasil",
    descricao: "Praias, paisagens naturais e cultura brasileira.",
    imagem: "/images/Brasil - Rio de Janeiro.png",
    alt: "Paisagem turística do Rio de Janeiro, Brasil",
  },
  {
    nome: "Paris",
    pais: "França",
    descricao: "Arquitetura, gastronomia e passeios culturais.",
    imagem: "/images/França - Paris.png",
    alt: "Paisagem turística de Paris, França",
  },
  {
    nome: "Tóquio",
    pais: "Japão",
    descricao: "Tradição, tecnologia e novas experiências.",
    imagem: "/images/Japão - Tóquio.png",
    alt: "Paisagem turística de Tóquio, Japão",
  },
];

function Destinos() {
  return (
    <section className="content-page">
      <header className="page-heading">
        <span className="section-kicker">CONNECTFLIGHT</span>

        <h1>
          Conheça nossos <span>destinos</span>
        </h1>

        <p>
          Descubra lugares incríveis para suas próximas férias.
          Escolha um destino e comece a planejar sua viagem.
        </p>
      </header>

      <div className="destination-grid">
        {destinos.map((destino) => (
          <article className="place-card" key={destino.nome}>
            <div className="place-art">
              <img
                src={destino.imagem}
                alt={destino.alt}
                loading="lazy"
              />
            </div>

            <div className="place-info">
              <span className="mini-label">{destino.pais}</span>

              <h2>{destino.nome}</h2>

              <p>{destino.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Destinos;