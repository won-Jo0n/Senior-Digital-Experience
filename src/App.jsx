import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import MyPage from "./pages/MyPage";
import Map from "./pages/Map";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import KioskStart from "./pages/Kiosk_Start";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext } from "react";
import { useEffect, useReducer, useRef, useState } from "react";
import NaverBook_page01 from "./pages/NaverBookPages/NaverBook_page01";
import NaverBook_page02 from "./pages/NaverBookPages/NaverBook_page02";
import NaverBook_page03 from "./pages/NaverBookPages/NaverBook_page03";
import Kiosk from "./pages/Kiosk";

function reducer(state, action) {
  console.log(state, action);
  let nextState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      nextState = [action.data, ...state];
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    case "DELETE":
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    default:
      return state;
  }
  localStorage.setItem("UserStatus", JSON.stringify(nextState));
  return nextState;
}

export const DataStateContext = createContext();
export const DataDispatchContext = createContext();
function App() {
  const nav = useNavigate();
  const [isLogin, setIslogin] = useState(false);
  console.log(isLogin);
  const mockData = [
    {
      id: 1, // 각 일기를 구분 할 수 있는 key 필요
      phoneNum: "01020081973",
      password: "qwer1234",
      birth: "2000-09-14",
      mission: [true, true, true],
      boardWrite: [],
    },
  ];

  const [data, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const idRef = useRef(0);
  useEffect(() => {
    const storedData = localStorage.getItem("UserStatus");
    if (!storedData || JSON.parse(storedData).length === 0) {
      console.log("localStorage에 데이터가 없으므로 mockData로 초기화");
      dispatch({ type: "INIT", data: mockData });
      idRef.current =
        mockData.length > 0 ? mockData[mockData.length - 1].id + 1 : 0;
      localStorage.setItem("UserStatus", JSON.stringify(mockData));
    } else {
      const parsedData = JSON.parse(storedData);
      console.log("localStorage에서 데이터를 로드합니다:", parsedData);
      let maxId = 0;
      parsedData.forEach((item) => {
        if (item.id > maxId) {
          maxId = item.id;
        }
      });
      idRef.current = maxId + 1;
      dispatch({
        type: "INIT",
        data: parsedData,
      });
    }

    setIsLoading(false);
  }, []);

  const onCreate = (phoneNum, password, birth) => {
    if (data.find((item) => item.phoneNum === phoneNum)) {
      alert("이미 가입된 전화번호입니다.");
      return;
    }
    var mission = [false, false, false];
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        phoneNum,
        password,
        birth,
        mission,
        boardWrite,
      },
    });
    alert("계정이 생성되었습니다.");
    nav("/");
  };

  const onUpdate = (id, phoneNum, password, birth, mission, boardWrite) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: id,
        phoneNum,
        password,
        birth,
        mission,
        boardWrite,
      },
    });
  };
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };
  const onLogin = () => {
    setIslogin(true);
  };
  if (!isLoading) {
    console.log("아직 다 안올라왔다잉");
  }
  if (isLoading) {
    return <div>데이터를 로드하는 중입니다...</div>;
  }
  return (
    <>
      <DataStateContext.Provider value={{ data, isLogin }}>
        <DataDispatchContext.Provider
          value={{ onCreate, onUpdate, onDelete, onLogin }}
        >
          <Routes>
            <Route path="/" element={<Home isLogin={isLogin} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/NewAccount" element={<NewAccount />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Kiosk" element={<KioskStart />} />
            <Route path="/Kiosk/:1" element={<Kiosk />} />
            <Route path="/NaverBook" element={<NaverBook_page01 />} />
            <Route
              path="/NaverBook/:page02"
              element={<NaverBook_page02 />}
            ></Route>
            <Route
              path="/NaverBook/:page03"
              element={<NaverBook_page03 />}
            ></Route>
            <Route path="/Map" element={<Map />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </DataDispatchContext.Provider>
      </DataStateContext.Provider>
    </>
  );
}

export default App;
