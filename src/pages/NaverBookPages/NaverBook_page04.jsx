import { useNavigate, useLocation } from "react-router-dom";
import "./NaverBook_page04.css";
import Button from "../../components/Button";
import Header from "../../components/Header";

const NaverBook_page04 = () => {
  const location = useLocation();
  const { date, time } = location.state || {};
  const nav = useNavigate();

  const fifthPage = () => {
    nav("/NaverBook/page05", {
      state: {
        date,
        time,
        slot,
      },
    });
  };

  const getSlot = (time) => {
    const hour = parseInt(time.split(":")[0]);
    return hour < 12 ? "오전" : "오후";
  };
  const slot = time ? getSlot(time) : "";
  return (
    <div className="bigContainer">
      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone"></img>

        <div className="NaverBook_page04">
          <p>아래 내용이 맞는지 확인해주세요</p>

          {/* 예약 정보 박스 */}
          <div className="BookCheck">
            <strong>소통부부한의원 고양 진료예약</strong>
            <div className="bookTimeDate">
              <span>일정</span>
              <span>
                {date} ({slot}) · {time}
              </span>
            </div>
          </div>

          {/* ✅ 추가 정보 유지 */}
          <div className="addInfo">
            <h3>추가 정보</h3>
            <p>진료목적</p>
            <div className="bookCheckBox">
              <label>
                <input type="checkbox" /> 클리닉
              </label>
              <label>
                <input type="checkbox" /> 도수상담
              </label>
              <label>
                <input type="checkbox" /> 수액
              </label>
              <label>
                <input type="checkbox" /> 보건증 발급
              </label>
              <label>
                <input type="checkbox" /> 진성 간호사와 상담
              </label>
            </div>
          </div>
          {/* 예약자 정보 */}
          <div className="userInfoSection">
            <h4>예약자 정보</h4>
            <div className="userInfoTop">
              <div>
                <p className="username">염지원</p>
                <p className="userphone">
                  010-23**-32**{" "}
                  <button className="checkBtn">연락처 확인</button>
                </p>
              </div>
              <Button text={"변경"} type={"graySmall"} />
            </div>

            <p className="requestLabel">요청사항</p>
            <select className="requestInput">
              <option value="">요청사항을 선택해주세요.</option>
              <option value="1">빠른 진료</option>
              <option value="2">조용한 자리</option>
            </select>
          </div>
          {/* 안내 문구 */}
          <div className="addNotice">
            실제 방문자가 다르다면 정보를 추가해 주세요.
          </div>

          {/* 버튼 영역 */}
          <div className="bookButtonRow">
            <div className="bookBack">
              <Button text={"이전"} />
            </div>
            <div className="agreeAndbookRequest" onClick={fifthPage}>
              <Button text={"동의하고 예약 신청하기"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NaverBook_page04;
