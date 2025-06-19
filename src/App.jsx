import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import MyPage from "./pages/MyPage";
import Kiosk from "./pages/Kiosk";
import NaverBook from "./pages/NaverBook";
import Map from "./pages/Map";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Popup from "./components/Popup";
import KioskStartDisplay from "./pages/KioskStartDisplay";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { useEffect, useReducer, useRef, useState } from "react";

function reducer(state, action) {
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
  localStorage.setItem("UserStatus", JSON.stringify(mockData));

  const [data, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("UserStatus");
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);

    let maxId = 0;
    parsedData.forEach((item) => {
      if (item.id > maxId) {
        maxId = item.id;
      }
    });

    idRef.current = maxId + 1;
    console.log(parsedData);
    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(true);
  }, []);
  const onCreate = (phoneNum, password, birth) => {
    var mission = [false, false, false];
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        phoneNum,
        password,
        birth,
        mission,
        // boardWrite,
      },
    });
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
  if (!isLoading) {
    console.log("아직 다 안올라왔다잉");
  }
  return (
    <>
      <DataStateContext.Provider value={data}>
        <DataDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/NewAccount" element={<NewAccount />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Kiosk" element={<KioskStartDisplay />} />
            <Route path="/NaverBook" element={<NaverBook />} />
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
