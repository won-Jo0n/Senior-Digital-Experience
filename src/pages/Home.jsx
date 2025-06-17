import "./Home.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
const Home = () => {
  const nav = useNavigate();

  // nav
  const onMyPage = () => {
    nav("/MyPage");
  };
  const onLogin = () => {
    nav("/Login");
  };
  const onNewAccount = () => {
    nav("/NewAccount");
  };
  const onComunity = () => {
    nav("/Comunity");
  };

  return (
    <div className="Home">
      <div className="Logo">
        <Logo />
      </div>
      <div className="wrapper">
        <Button text={"마이페이지"} type={"myPage"} onClick={onMyPage} />

        <Button text={"로그인"} type={"myPage"} onClick={onLogin} />

        <Button text={"회원가입"} type={"myPage"} onClick={onNewAccount} />
      </div>
      <div className="Comunity">
        <Button text={"커뮤니티"} type={"myPage"} onClick={onComunity} />
      </div>
    </div>
  );
};
export default Home;
