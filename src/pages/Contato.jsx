
import { useState } from "react";

function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setEnviado(true);
  }

  return (
    <section className="content-page">
      <header className="page-heading">
        <span className="section-kicker">CONNECTFLIGHT</span>
        <h1>Entre em <span>contato</span></h1>
        <p>
          Tem dúvidas sobre nossos pacotes? Envie sua mensagem
          utilizando o formulário abaixo.
        </p>
      </header>

      <div className="contact-layout">
        <aside className="contact-aside">
          <span className="contact-symbol" aria-hidden="true">✉</span>
          <h2>Vamos conversar?</h2>
          <p>
            Compartilhe suas dúvidas e conte como podemos ajudar
            no planejamento da sua próxima viagem.
          </p>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Seu nome"
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            required
          />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            placeholder="Digite sua mensagem"
            required
          />

          <button className="button button-primary submit-button" type="submit">
            Enviar mensagem
          </button>

          {enviado && (
            <p className="form-feedback" role="status">
              Formulário validado. O envio real da mensagem ainda
              precisa de integração com um servidor.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contato;
