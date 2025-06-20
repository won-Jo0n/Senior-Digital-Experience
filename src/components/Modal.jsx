import "./Modal.css";
import Button from "./Button";
import { useContext, useState } from "react";
import { DataDispatchContext } from "../App";

export const Modal = ({ setModal }) => {
  const { onCreateCommunity } = useContext(DataDispatchContext);

  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [text, setText] = useState("");

  const handleCreateContent = () => {
    if (!title.trim() || !userName.trim() || !text.trim()) {
      // 입력값 유효성 검사
      alert("모든 입력란을 채워주세요!");
      return;
    }
    const createDate = new Date().toLocaleDateString();

    onCreateCommunity(title, userName, createDate, text);
    setModal(false); // 모달 닫기
  };

  return (
    <div className="Overlay">
      <div className="container">
        <div className="modal-header">
          <div className="title">
            <input
              placeholder="제목을 적어주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="userName">
            <input
              placeholder="이름을 작성해주세요"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="text">
          <textarea
            placeholder="문의사항이나 건의사항을 입력해주세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <Button
          type={"cancle"}
          text={"취소"}
          onClick={() => {
            setModal(false);
          }}
        />

        <Button
          onClick={handleCreateContent}
          text={"글 추가"}
          type={"add-content"}
        />
      </div>
    </div>
  );
};
