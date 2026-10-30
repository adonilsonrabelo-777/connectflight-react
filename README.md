ConnectFlight ✈️
Aplicação web de viagens desenvolvida como atividade acadêmica utilizando React e Vite. O projeto apresenta páginas para explorar destinos, consultar ofertas e entrar em contato.

📌 Funcionalidades
- Home: página inicial da aplicação.
- Destinos: página dedicada à apresentação de destinos.
- Ofertas: página para exibição de ofertas de viagens.
- Contato: página com informações e formulário de contato.
- Navegação entre páginas: rotas gerenciadas com React Router.
- Layout compartilhado: componentes reutilizáveis de cabeçalho e rodapé.
- Interface responsiva: estilos adaptados a diferentes tamanhos de tela, conforme as regras CSS do projeto.

🛠️ Tecnologias utilizadas
- React
- Vite
- JavaScript
- CSS
- React Router
- Node.js e npm para executar e gerenciar o projeto

📂 Estrutura do projeto
connectflight-react/
├── public/                 # Arquivos estáticos públicos utilizados
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Cabeçalho compartilhado
│   │   ├── Footer.jsx      # Rodapé compartilhado
│   │   └── Layout.jsx      # Estrutura comum das páginas
│   ├── pages/
│   │   ├── Home.jsx        # Página inicial
│   │   ├── Destinos.jsx    # Página de destinos
│   │   ├── Ofertas.jsx     # Página de ofertas
│   │   └── Contato.jsx     # Página de contato
│   ├── App.jsx             # Rotas e composição principal
│   ├── main.jsx            # Ponto de entrada React
│   └── index.css           # Estilos globais
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md

A estrutura acima é uma referência baseada na organização prevista para o projeto. 

⚙️ Requisitos
- Node.js instalado (versão compatível com as dependências do projeto).
- npm, instalado junto com o Node.js.
- Git, caso deseje versionar o projeto localmente.

🚀 Como executar localmente
1. Clone o repositório:
   git clone URL_DO_REPOSITORIO
2. Entre na pasta do projeto:
   cd connectflight-react
3. Instale as dependências:
   npm install
4. Inicie o servidor de desenvolvimento:
   npm run dev
5. Abra no navegador o endereço local mostrado no terminal pelo Vite (geralmente http://localhost:5173).

🏗️ Gerar versão de produção
Para verificar se o projeto compila corretamente:
npm run build
Os arquivos gerados para produção serão colocados na pasta dist/. 

🧭 Rotas da aplicação
Caminho	Página
/	Home
/destinos	Destinos
/ofertas	Ofertas
/contato	Contato


📚 Objetivo acadêmico
O projeto tem como objetivo praticar o desenvolvimento de uma interface web com React, a organização de componentes reutilizáveis, a navegação entre páginas com React Router e a aplicação de estilos CSS.

👤 Autor
- Nome: Adonilson Rabelo dos Santos

Projeto desenvolvido para fins acadêmicos.