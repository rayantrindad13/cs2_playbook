import imgHomeMapa from "../assets/home-mapa.jpeg";
import de_mirage from "../assets/mirage/de_mirage.jpg";
import miragePlays from "../assets/database/miragePlays";

import { useDispatch } from "react-redux";
import { abrirPopup } from "../slices/popupSlices.js";

const Mirage = () => {
  const dispatch = useDispatch();

  return (
    <div className="home--mapa">
      <img src={imgHomeMapa} alt="Background" className="home--mapa__img" />

      <div className="home--esqueleto">
        <img
          src={de_mirage}
          alt="Mapa Mirage"
          className="home--esqueleto__img"
        />
      </div>

      <div className="home--side">
        <div className="home--side__tr">
          <h1 className="home--side__title">Terroristas</h1>

          {miragePlays
            .filter((jogada) => jogada.lado === "TR")
            .map((jogada) => (
              <div key={jogada.id}>
                <button
                  className="jogada-btn"
                  onClick={() => dispatch(abrirPopup(jogada))}
                >
                  {jogada.nome}
                </button>
              </div>
            ))}
        </div>

        <div className="home--side__ct">
          <h1 className="home--side__title">Counter Terrorists</h1>
          {miragePlays
            .filter((jogada) => jogada.lado === "CT")
            .map((jogada) => (
              <div key={jogada.id}>
                <button
                  className="jogada-btn"
                  onClick={() => dispatch(abrirPopup(jogada))}
                >
                  {jogada.nome}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mirage;
