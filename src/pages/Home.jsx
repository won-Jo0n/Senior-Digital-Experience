import "./Home.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import NavCard from "../components/NavCard";
import { useContext, useEffect, useState } from "react";
import { DataDispatchContext, DataStateContext } from "../App";
import StampPopup from "../components/StampPopup";

const Home = () => {
  const nav = useNavigate();
  const { isLogin } = useContext(DataStateContext);
  const { onLogout } = useContext(DataDispatchContext);

  // StampPopup의 가시성을 관리하는 상태입니다.
  const [showStampPopup, setShowStampPopup] = useState(false);

  // useEffect 훅을 사용하여 로그인 상태를 확인하고 팝업을 표시합니다.
  useEffect(() => {
    // 사용자가 로그인 상태이고, 'hasSeenStampPopup' 플래그가 localStorage에 없으면 팝업을 보여줍니다.
    // 이 플래그는 팝업이 이미 한 번 표시되었는지 추적하여 재로그인 시 다시 나타나지 않도록 합니다.
    if (isLogin === "LOGIN") {
      setShowStampPopup(true);
    }
  }, [isLogin]); // userState.isLogin 값이 변경될 때마다 이 이펙트가 다시 실행됩니다.

  // StampPopup을 닫는 함수
  const handleCloseStampPopup = () => {
    setShowStampPopup(false);
  };

  // nav
  const onMyPage = () => {
    nav("/MyPage");
  };
  const onLogoutClick = () => {
    onLogout();
    alert("로그아웃되었습니다!");
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
  const onKiosk = () => {
    nav("/Kiosk");
  };
  const onNaverBook = () => {
    nav("/NaverBook/page01");
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
        <div className="ADMIN">
          <span>{`${isLogin === "ADMIN" ? "관리자 모드" : ""}`}</span>
        </div>
        <div className="MyPage">
          <Button
            text={"마이페이지"}
            type={`${isLogin === "LOGIN" ? "MyPage" : "none"}`}
            onClick={onMyPage}
          />
        </div>
        <div className="MyPage">
          <Button
            text={"로그아웃"}
            type={`${isLogin === "LOGIN" ? "MyPage" : "none"}`}
            onClick={onLogoutClick}
          />
        </div>
        <div className="Login-btn">
          <Button
            text={"로그인"}
            type={`${
              isLogin === "LOGIN" || isLogin === "ADMIN" ? "none" : "Login"
            }`}
            onClick={onLogin}
          />
        </div>

        <div className="NewAccount-btn">
          <Button
            text={"회원가입"}
            type={`${
              isLogin === "LOGIN" || isLogin === "ADMIN" ? "none" : "NewAccount"
            }`}
            onClick={onNewAccount}
          />
        </div>
      </div>
      <div className="Comunity-btn">
        <Button
          text={"관리자와 소통하기"}
          type={"Comunity"}
          onClick={onComunity}
        />
      </div>
      <div className="wrapper_main">
        <NavCard
          title={"키오스크"}
          explanation={"부가적인 설명입니다."}
          cardImage={1}
          onClick={onKiosk}
        />
        <NavCard
          title={"병원예약"}
          explanation={"부가적인 설명입니다."}
          cardImage={2}
          onClick={onNaverBook}
        />
        <NavCard
          title={"주변 복지 시설 보기"}
          explanation={"부가적인 설명입니다."}
          cardImage={3}
          onClick={onMap}
        />
      </div>
      {/* showStampPopup 상태가 true일 때만 StampPopup 컴포넌트를 렌더링합니다. */}
      {showStampPopup && <StampPopup onClose={handleCloseStampPopup} />}
    </div>
  );
};
export default Home;
