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

  return (
    <div className="myPageContainer">
      {/* 회원정보 */}
      <div className="userInfo">
        <h3>회원 정보</h3>
        <label>전화번호</label>
        <input type="text" defaultValue={phoneNum.current} />
        <label>비밀번호</label>
        <input type="password" defaultValue={password.current} />
        <label>생년월일</label>
        <input type="date" defaultValue={birth.current} />
        <button>수정하기</button>
      </div>

      {/* 미션 및 쿠폰 */}
      <div className="prices">
        <div className="stampContainer">
          <div className="missionBox">
            <p className="missionTitle">멘트, 뭐가 좋을까?</p>
            <p className="missionItem">네이버 병원 예약하기 체험</p>
            <p className="missionItem">키오스크 주문하기 체험</p>
            <p className="missionSuccess">미션 성공!</p>
          </div>
        </div>
        <div className="CouponContainer">
          <h3>보상</h3>
          <Coupon isShow={userState.loginedId.mission[0]} />
          <Coupon isShow={userState.loginedId.mission[1]} />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
