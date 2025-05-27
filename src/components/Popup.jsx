import { useDispatch, useSelector } from "react-redux";
import { fecharPopup } from "../slices/popupSlices";

const Popup = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state) => state.popup);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button onClick={() => dispatch(fecharPopup())}>Fechar</button>
        <h3>{content.nome}</h3>
        <p>{content.descricao}</p>
        {content.imagem && <img src={content.imagem} alt={content.nome} />}
      </div>
    </div>
  );
};

export default Popup;
