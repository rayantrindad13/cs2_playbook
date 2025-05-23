import imgHome from "../assets/cs-agg-playbook.jpg";
import setaDir from "../assets/right-arrow.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src={imgHome}
          alt="Imagem CS Playbook Agressivo"
        />

        <Link to="/HomeMapa">
          <img className="home__button" src={setaDir} alt="Seta Direita" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
