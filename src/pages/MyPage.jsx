// MyPage.jsx
import "./MyPage.css";
import Stamp from "../components/MyPageComponents/Stamp";
import Coupon from "../components/MyPageComponents/Coupon";
import { useContext, useRef } from "react";
import { DataDispatchContext, DataStateContext } from "../App";
import Logo from "../components/Logo";
import getCompleteMissionImage from "../util/getCompleteMissionImage";
import mypage_stamp from "../assets/myPage/mypage_stamp.png";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const { onUpdate, onDelete, onLogout } = useContext(DataDispatchContext);
  const nav = useNavigate();
  const userState = useContext(DataStateContext);
  const phoneNum = useRef(userState.loginedId.phoneNum);
  const password = useRef(userState.loginedId.password);
  const birth = useRef(userState.loginedId.birth);

  console.log(userState.loginedId);
  const birthDate = new Date(userState.loginedId.birth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--; // 생일 아직 안 지난 경우
  }

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
            <input
              type="text"
              defaultValue={phoneNum.current}
              onChange={(event) => {
                phoneNum.current = event.target.value;
              }}
            />
          </div>
          <div className="infoRow">
            <span>비밀번호</span>
            <input
              type="text"
              defaultValue={password.current}
              onChange={(event) => {
                password.current = event.target.value;
              }}
            />
          </div>
          <div className="infoRow">
            <span>생년월일</span>
            <input
              type="date"
              defaultValue={birth.current}
              onChange={(event) => {
                birth.current = event.target.value;
              }}
            />
          </div>
          <button
            className="editBtn"
            onClick={() => {
              onUpdate(
                userState.loginedId.id,
                phoneNum.current,
                password.current,
                birth.current,
                userState.loginedId.mission
              );
            }}
          >
            수정하기
          </button>
          <button
            className="deleteBtn"
            onClick={() => {
              let result = confirm("정말로 탈퇴하시겠습니까?");
              if (result) {
                console.log(userState.loginedId.id);
                onDelete(userState.loginedId.id);
                onLogout();
                alert("탈퇴되었습니다!");
                nav("/");
              }
            }}
          >
            탈퇴하기
          </button>
        </div>

        {/* 가운데: 미션 */}
        <div
          className="card missionCard"
          style={{
            backgroundImage: `url(${mypage_stamp})`,
            backgroundSize: "contain", // div에 맞게 꽉 채움
            backgroundPosition: "center", // 가운데 정렬
            backgroundRepeat: "no-repeat", // 반복 안 함
          }}
        >
          <div className="balloon-text">
            내 나이 {age}세, <br />
            청춘 시작이다!
          </div>
          <div className="kioskStampDiv">
            <Stamp isShow={true}></Stamp>
          </div>
          <div className="naverBookStampDiv">
            <Stamp isShow={true}></Stamp>
          </div>
        </div>

        {/* 우측: 보상 */}
        <div className="card rewardCard">
          <div className="cardHeader">보상</div>
          <p>키오스크 보상</p>
          <div className="kiosk_coupon">
            <Coupon isShow={userState.loginedId.mission[0]}></Coupon>
          </div>
          <p>네이버 예약 보상</p>
          <div className="kiosk_coupon">
            <Coupon isShow={userState.loginedId.mission[1]}></Coupon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
