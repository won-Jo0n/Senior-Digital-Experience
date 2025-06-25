import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="error-title">404</h1>
      <p className="error-subtitle">이런! 페이지를 찾을 수 없습니다.</p>

      <div className="image-wrapper">
        <img src="/limhero.png" alt="임영웅" />
        <button onClick={() => navigate("/")} className="limheroBtn">
          홈으로
          <br />
          돌아가기
        </button>
      </div>

      <p className="caption">
        버튼을 누르시면 홈으로 이동해요 <b>건행</b>~ 💚
      </p>
    </div>
  );
};

export default NotFound;
