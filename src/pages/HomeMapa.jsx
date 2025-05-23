import mirageBanner from "../assets/mirage-banner.png";
import imgHomeMapa from "../assets/home-mapa.jpeg";
import { Link } from "react-router-dom";

const HomeMapa = () => {
  return (
    <div className="home--mapa">
      <img src={imgHomeMapa} alt="Background" className="home--mapa__img" />

      <div className="container__mapas">
        <Link to="/mirage" className="container__mapas--btn">
          <img
            src={mirageBanner}
            alt="Mirage"
            className="container__mapas--img"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomeMapa;
