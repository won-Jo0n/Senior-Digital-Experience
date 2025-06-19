import "./Logo.css";
import logo from "../assets/logo-.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const nav = useNavigate();

  const onClick = () => {
    nav("/");
  };
  return (
    <div className="Logo">
      <img onClick={onClick} className="logo_img" src={logo} alt="로고" />
    </div>
  );
};

export default Logo;
