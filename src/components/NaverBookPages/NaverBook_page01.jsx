import { useNavigate } from "react-router-dom";
import "./NaverBook_page01.css";

const NaverBook_page01 = () => {
  const nav = useNavigate();

  const thirdPage = () => {
    nav("/page02");
  };

  return (
    <div className="NaverBook_page01">
      <img src="#"></img>
      <h4>해봐YOU의원</h4>
      <p>
        해봐you의원은 노령층의 디지털 뭐시기 향상을 위하여 예약 우선제로
        운영됩니다.(*당일진료가능)
      </p>
      <p>리뷰 170</p>
      <div className="page01_wrapper">
        <img src="#"></img>

        <div className="naverBookDiv">
          <h3>예약</h3>
          <div className="secondBookButton" onClick={thirdPage}>
            <h3>진료 예약하기</h3>
            <p>보건복지부 인증 전문의 원장님의 진료 ...</p>
            <img src="#" className="secondBookImg"></img>
            <p>리뷰 49</p>
          </div>
        </div>

        <div>
          <h3>소개</h3>
          <p>
            안녕하세요 박세원 박진성 염지원 지원준입니다. <br />
            뭐라뭐라뭐라뭐ㅏ룽러ㅜㄴ아ㅓㅜ란우러ㅜ라ㅜㄴ어ㅏㄹ <br />
            우러ㅏㄴ우라ㅓㅜㄴ아ㅓ루ㅏ우라눙러ㅏㅜㄴ어루낭ㄹ <br />
            ㅇㄴ뤈ㅇ뤄ㅏ누러ㅏㅜ너다ㅜ러ㅏㄷ누러ㅏㅜ너루다루너달 <br />
            러ㅏ두너루나ㅜ러울너다ㅜ라누러단뤄나ㅜㄹ나더루나ㅓㄷㄹ <br />
          </p>
          <hr />
          <h4>집 가고 싶다.</h4>
          <p>
            안녕하세요 박세원 박진성 염지원 지원준입니다. <br />
            뭐라뭐라뭐라뭐ㅏ룽러ㅜㄴ아ㅓㅜ란우러ㅜ라ㅜㄴ어ㅏㄹ <br />
            우러ㅏㄴ우라ㅓㅜㄴ아ㅓ루ㅏ우라눙러ㅏㅜㄴ어루낭ㄹ <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default NaverBook_page01;
