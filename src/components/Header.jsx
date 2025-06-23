import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";

const Header = () => {
  const nav = useNavigate();

  const handdlePrevBtn = () => {
    nav(-1);
  };

  const handdleNavHome = () => {
    nav("/");
  };

  return (
    <header className="Header">
      <button onClick={handdlePrevBtn}>이전 페이지</button>
      <button onClick={handdleNavHome}>홈으로</button>
    </header>
  );
};

export default Header;
