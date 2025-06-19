import { useNavigate } from "react-router-dom";
import "./NaverBook_page03.css";
import { useState } from "react";
import Button from "../../components/Button";

const NaverBook_page03 = () => {
  const nav = useNavigate();

  const forthPage = () => {
    nav("/NaverBook/page04");
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  // 현재 달의 첫 날
  const firstDayOfMonth = new Date(year, month, 1);
  // 달력 시작 날짜를 현재 달의 첫 날의 주의 일요일로 설정
  const startDay = new Date(firstDayOfMonth);
  startDay.setDate(1 - firstDayOfMonth.getDay());

  // 현재 달의 마지막 날
  const lastDayOfMonth = new Date(year, month + 1, 0);
  // 달력 끝 날짜를 현재 달의 마지막 날의 주의 토요일로 설정
  const endDay = new Date(lastDayOfMonth);
  endDay.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

  const groupDatesByWeek = (startDay, endDay) => {
    const weeks = [];
    let currentWeek = [];
    let currentDate = new Date(startDay);

    while (currentDate <= endDay) {
      currentWeek.push(new Date(currentDate));
      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  // 렌더링할 날짜 배열 생성
  const weeks = groupDatesByWeek(startDay, endDay);

  const handlePrevMonth = () => {
    // 이전 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    // 다음 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };
  return (
    <div className="NaverBook_page03">
      <div className="thirdBookDiv">
        <h3>해봐YOU의원_네이버예약</h3>
        <p>
          해봐YOU의원 네이버 예약입니다. 간편하게 예약하고 문의해주세요.
          감사합니다.
        </p>
      </div>
      <div className="action-buttons">
        <Button text={"예약하기"} />
        <Button text={"상세정보"} />
        <Button text={"리뷰"} />
      </div>
      <div className="allCalendar">
        <h3>날짜와 시간을 선택해주세요</h3>
        <div className="calendar">
          <div className="calendarHeader">
            <button onClick={handlePrevMonth}>◀</button>
            {year}.{month + 1}
            <button onClick={handleNextMonth}>▶</button>
          </div>
          <div className="calendarWeek">
            {/* {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
              <div className="weekday" key={index}>
                {day()}
              </div>
            ))} */}
          </div>
          <div className="calendarDay">
            {weeks.map((week, weekIndex) => (
              <div className="week" key={weekIndex}>
                {week.map((date, dayIndex) => (
                  <div className="day" key={dayIndex}>
                    {date.getDate()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="clockbutton">
        <hr />
        <div className="amButton">
          <p>오전</p>
          <Button text={"9 : 00"}></Button>
          <Button text={"9 : 30"}></Button>
          <Button text={"10 : 00"}></Button>
          <Button text={"10 : 30"}></Button>
          <br />
          <Button text={"11 : 00"}></Button>
          <Button text={"11 : 30"}></Button>
        </div>
        <div className="pmButton">
          <p>오전</p>
          <Button text={"12 : 00"} type={"type"}></Button>
          <Button text={"12 : 30"}></Button>
          <Button text={"1 : 00"}></Button>
          <Button text={"1 : 30"}></Button>
          <br />
          <Button text={"2: 00"}></Button>
          <Button text={"2 : 30"}></Button>
          <Button text={"3 : 00"}></Button>
          <Button text={"3 : 30"}></Button>
          <br />
          <Button text={"4 : 00"}></Button>
          <Button text={"4 : 30"}></Button>
          <Button text={"5: 00"}></Button>
          <Button text={"5 : 30"}></Button>
          <br />
          <Button text={"6 : 00"}></Button>
          <Button text={"6 : 30"}></Button>
          <Button text={"7 : 00"}></Button>
          <Button text={"7 : 30"}></Button>
          <br />
          <Button text={"8: 00"}></Button>
        </div>
      </div>
      <div>
        <Button text={"💬"} />
        <Button onClick={forthPage} text={"다음 단계"} />
      </div>
    </div>
  );
};

export default NaverBook_page03;
