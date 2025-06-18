import "./NavCard.css";

const NavCard = ({ title, explanation }) => {
  return (
    <div className="NavCard">
      <div>
        <h4>{title}</h4>
        <div className="explanation">{explanation}</div>
      </div>
    </div>
  );
};

export default NavCard;
