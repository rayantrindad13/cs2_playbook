import imgHomeMapa from "../assets/home-mapa.jpeg";
import de_nuke from "../assets/nuke/de_nuke.jpg";

const Nuke = () => {
  return (
    <div className="home--mapa">
      <img src={imgHomeMapa} alt="Background" className="home--mapa__img" />

      <div className="home--esqueleto">
        <img src={de_nuke} alt="Mapa Nuke" className="home--esqueleto__img" />
      </div>

      <div className="home--side">
        <div className="home--side__tr">
          <h2>Terrorists</h2>
          <p>Conteúdo do lado TR</p>
        </div>

        <div className="home--side__ct">
          <h2>Counter Terrorists</h2>
          <p>Conteúdo do lado CT</p>
        </div>
      </div>
    </div>
  );
};

export default Nuke;
