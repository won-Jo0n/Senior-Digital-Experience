import "./Logo.css";
import logo from "../assets/logo-.png";

const Logo = () => {
  return (
    <div className="Logo">
      <img className="logo_img" src={logo} alt="로고" />
    </div>
  );
};

export default Logo;
