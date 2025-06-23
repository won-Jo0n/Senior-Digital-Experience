import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";

const Header = ({ rightChild }) => {
  const nav = useNavigate();

  const handdlePrevBtn = () => {
    nav(-1);
  };

  return (
    <header className="Header">
      <button onClick={handdlePrevBtn}>이전 페이지</button>
      <div className="Header-logo">로고</div>
      <div className="Header-right-child">{rightChild}</div>
    </header>
  );
};

export default Header;
