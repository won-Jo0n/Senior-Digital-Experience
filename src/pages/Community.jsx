import "./Community.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Modal } from "../components/Modal";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { DataStateContext } from "../App";
import { DataDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const data = useContext(DataStateContext);
  const nav = useNavigate();
  const [searchingText, setSearchingText] = useState("");
  const [filteredCommunityData, setFilteredCommunityData] = useState([]);
  const { onDeleteCommunityContent } = useContext(DataDispatchContext);

  const onModal = () => {
    if (data.isLogin === "LOGIN" || data.isLogin === "ADMIN") {
      setModalOpen(true);
    } else {
      alert("로그인 후 이용해주세요!");
      nav("/Login");
    }
  };
  useEffect(() => {
    if (data.communityData) {
      setFilteredCommunityData(data.communityData);
    }
  }, [data.communityData]);

  const searching = () => {
    if (searchingText.trim() === "") {
      setFilteredCommunityData(data.communityData);
    } else {
      const filteredItems = data.communityData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchingText.toLowerCase()) ||
          item.userName.toLowerCase().includes(searchingText.toLowerCase()) ||
          item.text.toLowerCase().includes(searchingText.toLowerCase())
      );
      setFilteredCommunityData(filteredItems);
    }
  };
  const handleDeleteContent = (id) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      onDeleteCommunityContent(id);
      alert("글을 삭제하였습니다.");
    } else {
      alert("취소 하셨습니다");
    }
  };
  return (
    <div className="Community">
      <div className="Community_logo">
        <Logo />
      </div>
      <div className="search">
        <input
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              searching();
            }
          }}
          placeholder="검색어를 입력해주세요"
          onChange={(event) => {
            setSearchingText(event.target.value);
          }}
          value={searchingText}
        />
        <Button text={"검색"} onClick={searching} />
        <Button text={"글작성"} onClick={onModal} />
      </div>
      {modalOpen ? <Modal setModal={setModalOpen} /> : null}
      <div className="content-wrapper">
        <ul>
          {filteredCommunityData.map((item) => (
            <li key={item.id} className="community-content">
              <div
                className="community-title"
                onClick={() => {
                  nav(`/Community_content/${item.id}`);
                }}
              >
                {item.title}
              </div>
              <div className="community-date">{item.date}</div>
              <div className="community-userName">{item.userName}</div>
              {data.isLogin === "ADMIN" ? (
                <Button
                  text={"글 삭제"}
                  onClick={() => {
                    handleDeleteContent(item.id);
                  }}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Community;
