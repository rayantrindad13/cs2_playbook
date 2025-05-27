📖 CS:GO Playbook - Mirage, Dust 2 e Nuke
📝 Descrição
Projeto de estudo e aplicação de jogadas estratégicas para Counter-Strike: Global Offensive (CS:GO), com foco em três mapas: Mirage, Dust 2 e Nuke.
Permite ao usuário visualizar jogadas separadas por lado (TR/CT), acessar detalhes de cada jogada via pop-ups dinâmicos, além de visualizar imagens de esqueleto do mapa escolhido.

✅ Funcionalidades já implementadas
🔗 Rotas
/ → Página inicial com banner e botão de acesso.

/HomeMapa → Seleção de mapas com imagens (Mirage, Dust 2, Nuke).

/Mirage, /Dust-2, /Nuke → Páginas individuais de cada mapa.

🖼️ Estrutura de cada página de mapa
Imagem de fundo (blur) do mapa.

Esqueleto centralizado e emoldurado do mapa.

Colunas lado TR e CT:

Jogadas listadas dinamicamente de um arquivo local JS.

Cada jogada exibida como botão.

🚀 Renderização dinâmica das jogadas
Arquivo local JSON/JS contendo:

id

nome

lado (TR ou CT)

descrição

imagem

video (opcional)

🖱️ Ação nas jogadas
Cada botão ao ser clicado:

Dispara um dispatch(abrirPopup(jogada)) usando Redux.

Abre um popup global com os detalhes da jogada.

🛠️ Redux configurado
Criado popupSlice.js com reducers para:

abrirPopup

fecharPopup

store.js configurado.

Provider envolveu <App /> no main.jsx.

💬 Componente global de Popup
Inserido no App.jsx para renderização global.

Exibe:

Nome da jogada.

Descrição.

Imagem.

Botão para fechar.

🎨 Estilização
Estrutura com Flexbox para colunas de TR e CT.

Moldura estilizada no esqueleto do mapa.

Lista de jogadas dentro de moldura, com espaçamento e tipografia adequada.

Responsividade garantida via @media queries.

Estilização padrão para botões da jogada (.jogada-btn), com hover e foco.

🚧 Melhorias futuras
Implementar preview de vídeo nas jogadas.

Navegação entre jogadas no popup.

Sistema de favoritos.

Autoplay de smoke lineups.

Trocar Flexbox por CSS Grid para melhor alinhamento vertical.

Animações no popup.

🛠️ Tecnologias utilizadas
React.js com react-router-dom

Redux Toolkit para gerenciamento de estado global.

CSS puro com responsividade.

Vite como bundler.

🏅 Autor
Projeto desenvolvido por Rayan Alcantara.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
