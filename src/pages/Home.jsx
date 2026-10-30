
function TravelIllustration() {
  return (
    <img
      src="/images/ilustracao-viagem.svg"
      alt="Ilustração de viagem com globo, marcadores e viajante"
      className="travel-illustration"
    />
  );
}

function Home() {
  return (
    <section className="home-page">
      <div className="home-illustration">
        <TravelIllustration />
      </div>

      <h1 className="home-title">
        O seu próximo <span>destino</span> pode estar aqui...
      </h1>

      <div className="home-description">
        <p>
          Aqui você encontra uma seleção de{" "}
          <strong>pacotes completos</strong> para as suas férias!
        </p>

        <p>
          No <strong>ConnectFlight</strong> você encontra pacotes de viagens
          nacionais e internacionais que incluem: passagens aéreas, hotéis,
          café da manhã, <br /> e até seguro viagem com{" "}
          <strong>preços arrasadores!</strong>
        </p>

        <p>
          Se você ainda não tem um destino definido, confira nossa seção de ofertas.
        </p>
      </div>
    </section>
  );
}

export default Home;
