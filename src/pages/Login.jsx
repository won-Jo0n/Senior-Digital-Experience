import { useContext, useRef } from "react";
import Button from "../components/Button";
import { DataStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const data = useContext(DataStateContext);
  const phoneNumValue = useRef("");
  const passwordValue = useRef("");
  const navigate = useNavigate();
  const loginOnClick = () => {
    data.map((value) => {
      if (
        value.phoneNum === phoneNumValue.current &&
        value.password === passwordValue.current
      ) {
        navigate("/Home", { replace: true });
      }
    });
  };
  const newAccountOnClick = () => {
    navigate("/NewAccount", { replace: true });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="휴대폰 번호"
        onChange={(event) => {
          phoneNumValue.current = event.target.value;
        }}
      />
      <br />
      <input
        type="text"
        placeholder="비밀번호"
        onChange={(event) => {
          passwordValue.current = event.target.value;
        }}
      />
      <Button text={"로그인"} onClick={loginOnClick}></Button>
      <Button text={"회원가입"} onClick={newAccountOnClick}></Button>
    </div>
  );
};

export default Login;
