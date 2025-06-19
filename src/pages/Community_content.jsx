import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataStateContext } from "../App";
const Community_content = () => {
  const params = useParams();
  const data = useContext(DataStateContext);
  const communityData = data.communityData;

  const content = communityData.find(
    (item) => String(item.id) === String(params.id)
  );

  return (
    <div>
      <div>{content.title}</div>
      <div>{content.userName}</div>
      <div>{content.text}</div>
      {content.isAnswer ? (
        <div>{content.isAnswer}</div>
      ) : (
        "아직 답변되지 않은 게시글입니다."
      )}
    </div>
  );
};

export default Community_content;
