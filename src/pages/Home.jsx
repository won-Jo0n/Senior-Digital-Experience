import "./Home.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import NavCard from "../components/NavCard";

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
    nav("/Community");
  };
  const onMap = () => {
    nav("/Map");
  };

  return (
    <div className="Home">
      <div className="Logo">
        <Logo />
      </div>
      <div className="wrapper_menu">
        <div className="MyPage">
          <Button text={"마이페이지"} type={"myPage"} onClick={onMyPage} />
        </div>
        <div className="Login">
          <Button text={"로그인"} type={"myPage"} onClick={onLogin} />
        </div>
        /
        <div className="NewAccount">
          <Button text={"회원가입"} type={"myPage"} onClick={onNewAccount} />
        </div>
      </div>
      <div className="Comunity">
        <Button text={"커뮤니티"} type={"Comunity"} onClick={onComunity} />
      </div>
      <div className="wrapper_main">
        <NavCard
          title={"키오스크"}
          explanation={"부가적인 설명입니다."}
          cardImage={1}
        />
        <NavCard
          title={"병원예약"}
          explanation={"부가적인 설명입니다."}
          cardImage={2}
        />
        <NavCard
          title={"주변 복지 시설 보기"}
          explanation={"부가적인 설명입니다."}
          cardImage={3}
          onClick={onMap}
        />
      </div>
    </div>
  );
};
export default Home;
