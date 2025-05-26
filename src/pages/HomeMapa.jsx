import mirageBanner from "../assets/mirage-banner.png";
import dust2Banner from "../assets/banner-dust2.png";
import nukeBanner from "../assets/nuke-banner.png";
import imgHomeMapa from "../assets/home-mapa.jpeg";
import { Link } from "react-router-dom";

const HomeMapa = () => {
  return (
    <div className="home--mapa">
      <img src={imgHomeMapa} alt="Background" className="home--mapa__img" />

      <div className="container__mapas">
        <Link to="/Mirage" className="container__mapas--btn">
          <img
            src={mirageBanner}
            alt="Mirage"
            className="container__mapas--img"
          />
        </Link>

        <Link to="/Dust-2" className="container__mapas--btn">
          <img
            src={dust2Banner}
            alt="Dust 2"
            className="container__mapas--img"
          />
        </Link>

        <Link to="/Nuke" className="container__mapas--btn">
          <img src={nukeBanner} alt="Nuke" className="container__mapas--img" />
        </Link>
      </div>
    </div>
  );
};

export default HomeMapa;
