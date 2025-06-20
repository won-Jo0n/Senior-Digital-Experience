import "./NewAccount.css";
import Logo from "../components/Logo";
import { useContext, useRef, useState } from "react";
import Button from "../components/Button";
import { DataDispatchContext } from "../App";
const NewAccount = () => {
  const dataDispatch = useContext(DataDispatchContext);
  const phoneNumValue = useRef("");
  const passwordValue = useRef("");
  const birthValue = useRef("");
  const [isUserAgree, setUserAgree] = useState(false);
  const [isUserConsent, setUserConsent] = useState(false);

  const newAccountOnClick = () => {
    dataDispatch.onCreate(
      phoneNumValue.current,
      passwordValue.current,
      birthValue.current,
      isUserAgree,
      isUserConsent
    );
  };
  return (
    <div className="NewAccount">
      <Logo />
      <div className="account-wrapper">
        <input
          placeholder="전화번호"
          name="phoneNum"
          type="text"
          onChange={(event) => {
            phoneNumValue.current = event.target.value;
          }}
        />
        <input
          placeholder="비밀번호"
          type="text"
          onChange={(event) => {
            passwordValue.current = event.target.value;
          }}
        />
        <input
          placeholder="생년월일"
          type="date"
          onChange={(event) => {
            birthValue.current = event.target.value;
          }}
        />
        <div className="checkbox-group">
          <input
            onChange={() => {
              setUserAgree(!isUserAgree);
            }}
            id="user-agree"
            type="checkBox"
          />
          <label for="user-agree">개인정보 활용 동의(필수)</label>
        </div>
        <div className="checkbox-group">
          <input
            onChange={() => {
              setUserConsent(!isUserConsent);
            }}
            id="user-consent"
            type="checkBox"
          />
          <label for="user-consent">정말 열심히 할건가여?(필수)</label>
        </div>
        <Button text={"계정 생성"} onClick={newAccountOnClick}></Button>
      </div>
    </div>
  );
};

export default NewAccount;
