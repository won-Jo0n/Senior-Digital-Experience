import { useNavigate } from "react-router-dom";
import "./NaverBook_page04.css";
import Button from "../../components/Button";
import Header from "../../components/Header";

const NaverBook_page04 = () => {
  const nav = useNavigate();

  const fifthPage = () => {
    nav("/NaverBook/page05");
  };

  return (
    <div className="bigContainer">
      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone"></img>

        <div className="NaverBook_page04">
          <p>아래 내용이 맞는지 확인해주세요</p>
          <div className="BookCheck">
            <h2>해봐YOU의원_네이버예약</h2>
            <p>일정</p>
          </div>
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
          <div className="userInfo">
            <h4>예약자 정보</h4>
            <p>염지원</p>
            <p>010-2343-3244</p>
            <hr />
            <p>요청사항</p>
            <input
              type="text"
              className="bookRequest"
              placeholder="요청사항을 선택해주세요"
            ></input>
          </div>
          <div className="bookRequest">
            <div className="bookBack">
              <Button text={"이전"} />
            </div>
            <div className="agreeAndbookRequest">
              <Button text={"동의하고 예약 신청하기"} onClick={fifthPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NaverBook_page04;
