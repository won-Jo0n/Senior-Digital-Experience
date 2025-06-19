import { useNavigate } from "react-router-dom";
import "./NaverBook_page03.css";
import { useState } from "react";

const NaverBook_page03 = () => {
  const nav = useNavigate();

  const forthPage = () => {
    nav("/page04");
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
      <div className="secondBookButton" onClick={forthPage}>
        <h3>해봐YOU의원_네이버예약</h3>
        <p>
          해봐YOU의원 네이버 예약입니다. 간편하게 예약하고 문의해주세요.
          감사합니다.
        </p>
      </div>
      <div className="action-buttons">
        <button>예약하기</button>
        <button>상세정보</button>
        <button>리뷰</button>
      </div>
      <div>
        <h3>날짜와 시간을 선택해주세요</h3>
        <div className="calendar">
          <div className="calendarHeader">
            <button onClick={handlePrevMonth}>◀</button>
            {year}.{month + 1}
            <button onClick={handleNextMonth}>▶</button>
          </div>
          <div className="calendarWeek"></div>
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
    </div>
  );
};

export default NaverBook_page03;
