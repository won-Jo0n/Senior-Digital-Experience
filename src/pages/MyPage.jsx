import { useContext, useRef } from "react";
import { DataStateContext } from "../App";
import Stamp from "../components/MyPageComponents/Stamp";
import "./Mypage.css";
import Coupon from "../components/MyPageComponents/Coupon";

const MyPage = () => {
  const userState = useContext(DataStateContext);
  const phoneNum = useRef(userState.loginedId.phoneNum);
  const password = useRef(userState.loginedId.password);
  const birth = useRef(userState.loginedId.birth);

  return (
    <div className="myPageContainer">
      <div className="userInfo">
        <label>전화번호</label>
        <input type="text" defaultValue={phoneNum.current} />
        <br />
        <label>비밀번호</label>
        <input type="password" defaultValue={password.current} />
        <br />
        <label>생일</label>
        <input type="date" defaultValue={birth.current} />
      </div>
      <div className="prices">
        <div className="stampContainer">
          <Stamp isShow={userState.loginedId.mission[0]}></Stamp>
          <Stamp isShow={userState.loginedId.mission[1]}></Stamp>
        </div>
        <div className="CouponContainer">
          <Coupon isShow={userState.loginedId.mission[0]}></Coupon>
          <Coupon isShow={userState.loginedId.mission[1]}></Coupon>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
