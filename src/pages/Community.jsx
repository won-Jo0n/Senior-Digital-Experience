import { useContext, useRef, useState } from "react";
import { Modal } from "../components/Modal";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { DataStateContext } from "../App";

const Community = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const data = useContext(DataStateContext);

  const onModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="Community">
      <div className="Community_logo">
        <Logo />
      </div>
      <div className="search">
        <input />
        <Button text={"검색"} />
        <Button text={"글작성"} onClick={onModal} />
      </div>
      {modalOpen ? <Modal setModal={setModalOpen} /> : null}
      <div className="content-wrapper">
        <ul>
          {data.communityData.map((item) => (
            <li key={item.id}>
              {item.title} {item.userName} {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Community;
