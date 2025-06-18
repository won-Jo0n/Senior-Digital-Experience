import "./NavCard.css";
import { getNavCardImage } from "../util/getNavCardImage";

const NavCard = ({ title, explanation, cardImage, onClick }) => {
  return (
    <div className="NavCard">
      <div
        onClick={() => {
          onClick();
        }}
      >
        <img className="NavCardImage" src={getNavCardImage(cardImage)} />
        <h4 className="title">{title}</h4>
        <div className="explanation">{explanation}</div>
      </div>
    </div>
  );
};

export default NavCard;
