import { useNavigate } from "react-router-dom";
import "./NaverBook_page02.css";
import Header from "../../components/Header";

const NaverBook_page02 = () => {
  const nav = useNavigate();

  const thirdPage = () => {
    nav("/NaverBook/page03");
  };

  return (
    <div className="bigContainer">
      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone"></img>

        <div className="NaverBook_page02">
          <div className="NaverBook_Header">
            <div className="NaverBook_background"></div>
            <div className="NaverBook_content">
              <img src="#"></img>
              <h4>해봐YOU의원</h4>
              <p>
                해봐you의원은 노령층의 디지털 뭐시기 향상을 위하여 예약 우선제로
                운영됩니다.(*당일진료가능)
              </p>
              <p>⭐ 4.99 / 리뷰 777</p>
            </div>
          </div>

          <div className="page02_wrapper">
            <img src="#"></img>
          </div>
          <div className="naverBookDiv">
            <h3>예약</h3>
            <div className="secondBookButton" onClick={thirdPage}>
              <h3>진료 예약하기</h3>
              <p className="smallWord">
                해봐YOU의원 네이버 예약입니다. 간편하고 편리하게 문의해주세요.
                감사합니다.
              </p>
              <button className="bookBtn">예약하기</button>
              <p>⭐ 4.99 / 리뷰 777</p>
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
    </div>
  );
};

export default NaverBook_page02;
