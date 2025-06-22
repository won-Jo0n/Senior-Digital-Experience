// MyPage.jsx
import "./MyPage.css";
import Stamp from "../components/MyPageComponents/Stamp";
import Coupon from "../components/MyPageComponents/Coupon";
import { useContext, useRef } from "react";
import { DataStateContext } from "../App";
import Logo from "../components/Logo";
import getCompleteMissionImage from "../util/getCompleteMissionImage";

const MyPage = () => {
  const userState = useContext(DataStateContext);
  const phoneNum = useRef(userState.loginedId.phoneNum);
  const password = useRef(userState.loginedId.password);
  const birth = useRef(userState.loginedId.birth);

  return (
    <div className="myPageContainer">
      <Logo></Logo>
      <p className="subText">당신의 도전을 응원합니다.</p>

      <div className="contentContainer">
        {/* 좌측: 회원 정보 */}
        <div className="card userInfo">
          <div className="cardHeader">회원 정보</div>
          <div className="infoRow">
            <span>전화번호</span>
            <input type="text" defaultValue={phoneNum.current} />
          </div>
          <div className="infoRow">
            <span>비밀번호</span>
            <input type="password" defaultValue={password.current} />
          </div>
          <div className="infoRow">
            <span>생년월일</span>
            <input type="date" defaultValue={birth.current} />
          </div>
          <button className="editBtn">수정하기</button>
        </div>

        {/* 가운데: 미션 */}
        <div className="card missionCard">
          <img className="stampImg" src={getCompleteMissionImage(0)} alt="" />
        </div>

        {/* 우측: 보상 */}
        <div className="card rewardCard">
          <div className="cardHeader">보상</div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
