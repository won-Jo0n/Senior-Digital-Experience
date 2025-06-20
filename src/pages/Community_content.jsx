import "./Community_content.css";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useContext, useRef, useState } from "react";
import { DataStateContext } from "../App";
import { DataDispatchContext } from "../App";
import Logo from "../components/Logo";

const Community_content = () => {
  const params = useParams();
  const data = useContext(DataStateContext);
  const communityData = data.communityData;
  const [adminAnswer, setAdminAnswer] = useState("");
  const { onUpdateCommunity } = useContext(DataDispatchContext);

  const content = communityData.find(
    (item) => String(item.id) === String(params.id)
  );

  const handleAdminAnswer = (event) => {
    setAdminAnswer(event.target.value);
  };

  const handleOnclickAnswer = () => {
    if (adminAnswer.trim() === "") {
      alert("답변 내용을 입력해주세요.");
      return;
    }
    onUpdateCommunity(params.id, adminAnswer);
    alert("답변이 등록되었습니다.");
    setAdminAnswer("");
  };

  return (
    <div className="Community_content">
      <Logo />
      <div className="content_wrapper">
        <div className="content-info-wrapper">
          <div className="content-title">{content.title}</div>
          <div className="content-userName">{content.userName}</div>
        </div>
        <div className="content-text">{content.text}</div>
        <div className="content-answer">
          {content.isAnswer ? (
            <div>{content.isAnswer}</div>
          ) : (
            "아직 답변되지 않은 게시글입니다."
          )}
        </div>
        {data.isLogin === "ADMIN" ? (
          <div className="admin-asnwer">
            <textarea
              value={adminAnswer}
              onChange={handleAdminAnswer}
              placeholder="답변을 입력해주세요"
            />
            <Button text={"답변 등록"} onClick={handleOnclickAnswer} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Community_content;
