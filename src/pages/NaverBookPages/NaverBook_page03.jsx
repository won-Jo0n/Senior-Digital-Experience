import { useNavigate } from "react-router-dom";
import "./NaverBook_page03.css";

const NaverBook_page03 = () => {
  const nav = useNavigate;

  const forthPage = () => {
    nav("/page04");
  };

  return (
    <div>
      <div className="secondBookButton" onClick={forthPage}>
        <h3>진료 예약하기</h3>
      </div>
    </div>
  );
};

export default NaverBook_page03;
