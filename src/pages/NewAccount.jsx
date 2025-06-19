import { useContext, useRef } from "react";
import Button from "../components/Button";
import { DataDispatchContext } from "../App";
const NewAccount = () => {
  const dataDispatch = useContext(DataDispatchContext);
  const phoneNumValue = useRef("");
  const passwordValue = useRef("");
  const birthValue = useRef("");
  const newAccountOnClick = () => {
    dataDispatch.onCreate();
  };
  return (
    <div>
      전화번호
      <input
        type="text"
        onChange={(event) => {
          phoneNumValue.current = event.target.value;
        }}
      />
      <br />
      비밀번호
      <input
        type="text"
        onChange={(event) => {
          passwordValue.current = event.target.value;
        }}
      />
      <br />
      생년월일
      <input
        type="date"
        onChange={(event) => {
          birthValue.current = event.target.value;
        }}
      />
      <br />
      <Button text={"계정 생성"} onClick={newAccountOnClick}></Button>
    </div>
  );
};

export default NewAccount;
