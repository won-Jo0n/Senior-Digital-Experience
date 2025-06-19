import { useNavigate } from "react-router-dom";
import "./NaverBook_page04.css";

const NaverBook_page04 = () => {
  const nav = useNavigate();

  const fifthPage = () => {
    nav("/NaverBook/page05");
  };

  return <div>hi</div>;
};
export default NaverBook_page04;
