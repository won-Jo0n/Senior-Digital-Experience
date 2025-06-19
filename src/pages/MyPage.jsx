import { useContext, useRef } from "react";
import Button from "../components/Button";
import { DataStateContext } from "../App";
import stampImg from "../assets/myPage/stampImg.png";
import "./Mypage.css";

const MyPage = () => {
  const userState = useContext(DataStateContext);
  console.log("qwer");
  console.log(userState.loginedId);
  const phoneNum = useRef(userState.loginedId.phoneNum);
  const password = useRef(userState.loginedId.password);
  const birth = useRef(userState.loginedId.birth);

  var stamp = document.querySelector(".stamp");
  stamp.addEventListener("mousemove", function () {
    stamp.style = "transform : rotateY(20deg)";
  });

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
        <img className="stamp" src={stampImg} alt="" />
        <img className="stamp" src={stampImg} alt="" />
      </div>
    </div>
  );
};

export default MyPage;
