const RenderMapa = ({ mapa }) => {
  return (
    <div className="home--mapa">
      <img
        src={mapa.bg}
        alt={`Background ${mapa.nome}`}
        className="home--mapa__img"
      />

      <div className="home--esqueleto">
        <img
          src={mapa.esqueleto}
          alt={`Esqueleto ${mapa.nome}`}
          className="home--esqueleto__img"
        />
      </div>

      <div className="home--side">
        <div className="home--side__tr">
          <h2>Terrorists</h2>
          {mapa.jogadas
            .filter((jogada) => jogada.lado === "TR")
            .map((jogada) => (
              <div key={jogada.id} className="home--esqueleto">
                <h3>{jogada.nome}</h3>
                <p>{jogada.descricao}</p>
                <img
                  src={jogada.imagem}
                  alt={jogada.nome}
                  className="home--esqueleto__img"
                />
              </div>
            ))}
        </div>

        <div className="home--side__ct">
          <h2>Counter Terrorists</h2>
          {mapa.jogadas
            .filter((jogada) => jogada.lado === "CT")
            .map((jogada) => (
              <div key={jogada.id} className="home--esqueleto">
                <h3>{jogada.nome}</h3>
                <p>{jogada.descricao}</p>
                <img
                  src={jogada.imagem}
                  alt={jogada.nome}
                  className="home--esqueleto__img"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RenderMapa;
