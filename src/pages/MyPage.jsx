import { useContext, useRef } from "react";
import { DataStateContext } from "../App";
import Stamp from "../components/Stamp";
import "./Mypage.css";

const MyPage = () => {
  const userState = useContext(DataStateContext);
  console.log("qwer");
  console.log(userState.loginedId);
  const phoneNum = useRef(userState.loginedId.phoneNum);
  const password = useRef(userState.loginedId.password);
  const birth = useRef(userState.loginedId.birth);

  return (
    <div>
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
      <div className="stampContainer">
        <Stamp></Stamp>
        <Stamp></Stamp>
      </div>
    </div>
  );
};

export default MyPage;
