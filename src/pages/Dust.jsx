import imgHomeMapa from "../assets/home-mapa.jpeg";
import de_dust from "../assets/dust2/de_dust2.jpg";

const Dust = () => {
  return (
    <div className="home--mapa">
      <img src={imgHomeMapa} alt="Background" className="home--mapa__img" />

      <div className="home--esqueleto">
        <img src={de_dust} alt="Mapa Mirage" className="home--esqueleto__img" />
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

export default Dust;
