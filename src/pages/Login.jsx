import { useContext, useRef, useState } from "react";
import Button from "../components/Button";
import { DataStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const data = useContext(DataStateContext);
  const phoneNumValue = useRef("");
  const passwordValue = useRef("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginOnClick = () => {
    data.map((value) => {
      if (value.phoneNum === phoneNum && value.password === password) {
        alert("당신의 도전을 응원합니다!");
        navigate("/", { replace: true });
      } else if (value.phoneNum === phoneNum && value.password !== password) {
        passwordValue.current.focus();
        alert("비밀번호를 확인해주세요!");
      } else if (value.phoneNum !== phoneNum && value.password === password) {
        phoneNumValue.current.focus();
        alert("아이디를 확인해주세요!");
      } else {
        alert("가입된 정보가 없습니다 회원가입을 진행 해주세요!");
      }
    });
  };
  const newAccountOnClick = () => {
    navigate("/NewAccount", { replace: true });
  };
  return (
    <div>
      <input
        ref={phoneNumValue}
        type="text"
        placeholder="휴대폰 번호"
        value={phoneNum}
        onChange={(event) => {
          setPhoneNum(event.target.value);
        }}
      />
      <br />
      <input
        ref={passwordValue}
        type="text"
        placeholder="비밀번호"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button text={"로그인"} onClick={loginOnClick}></Button>
      <Button text={"회원가입"} onClick={newAccountOnClick}></Button>
    </div>
  );
};

export default Login;
