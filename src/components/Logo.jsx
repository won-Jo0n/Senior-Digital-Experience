import "./Logo.css";
import logo from "../assets/logo-.png";

const Logo = ({ onCLick }) => {
  return (
    <div className="Logo">
      <img onClick={onCLick} className="logo_img" src={logo} alt="로고" />
    </div>
  );
};

export default Logo;
