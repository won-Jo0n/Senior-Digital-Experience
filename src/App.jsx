import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import MyPage from "./pages/MyPage";
import Map from "./pages/Map";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import KioskStart from "./pages/Kiosk_Start";
import Kiosk from "./pages/Kiosk";
import KioskPayMent from "./pages/KioskPayMent";
import Kiosk_CardPayMent from "./pages/Kiosk_CardPayMent";
import KioskFinal from "./pages/KioskFinal";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext } from "react";
import { useEffect, useReducer, useRef, useState } from "react";
import NaverBook_page01 from "./pages/NaverBookPages/NaverBook_page01";
import NaverBook_page02 from "./pages/NaverBookPages/NaverBook_page02";
import NaverBook_page03 from "./pages/NaverBookPages/NaverBook_page03";
import NaverBook_page04 from "./pages/NaverBookPages/NaverBook_page04";
import NaverBook_page05 from "./pages/NaverBookPages/NaverBook_page05";
import Community_content from "./pages/Community_content";

// 사용자 관리 reducer
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

// 게시글 관리 reducer
function communityReducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      nextState = [action.data, ...state];
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? { ...item, isAnswer: action.data.answer }
          : item
      );
      break;
    case "DELETE":
      nextState = state.filter(
        (item) => String(item.id) !== String(action.data.id)
      );
      break;
    default:
      return state;
  }
  localStorage.setItem("CommunityData", JSON.stringify(nextState));
  return nextState;
}

export const DataStateContext = createContext();
export const DataDispatchContext = createContext();

function App() {
  const nav = useNavigate();
  const [isLogin, setIslogin] = useState("");
  const [loginedId, setLoginedId] = useState(null);

  // 사용자 mockData
  const mockData = [
    {
      id: 1, // 사용자 구분 key
      phoneNum: "01020081973",
      password: "qwer1234",
      birth: "2000-09-14",
      mission: [true, true, true],
      boardWrite: [],
    },
    { id: "ADMIN", password: "ADMIN1234" },
  ];

  // 게시글 mockData
  const communityMockData = [
    {
      id: 1, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 2, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 3, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 4, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 5, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 6, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 7, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 8, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 9, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
    {
      id: 10, // 커뮤니티 게시글 구분 key
      title: "title입니다.",
      userName: "name",
      date: "2025-06-19",
      text: "안녕하세요, text입니다.",
      isAnswer: "",
    },
  ];

  // 사용자
  const [data, dispatch] = useReducer(reducer, []);
  // 커뮤니티
  const [communityData, setCommunityData] = useReducer(communityReducer, []);

  const [isLoading, setIsLoading] = useState(true);
  const userIdRef = useRef(0);
  const communityIdRef = useRef(0);

  useEffect(() => {
    // 1. 사용자 데이터 로드 및 초기화
    const storedUserData = localStorage.getItem("UserStatus");
    if (!storedUserData || JSON.parse(storedUserData).length === 0) {
      console.log("localStorage에 사용자 데이터가 없으므로 mockData로 초기화");
      dispatch({ type: "INIT", data: mockData });
      const maxMockUserId = mockData.reduce(
        (max, item) => Math.max(max, item.id),
        0
      );
      userIdRef.current = maxMockUserId + 1;
      localStorage.setItem("UserStatus", JSON.stringify(mockData));
    } else {
      const parsedUserData = JSON.parse(storedUserData);
      console.log(
        "localStorage에서 사용자 데이터를 로드합니다:",
        parsedUserData
      );
      const maxStoredUserId = parsedUserData.reduce(
        (max, item) => Math.max(max, item.id),
        0
      );
      userIdRef.current = maxStoredUserId + 1;
      dispatch({ type: "INIT", data: parsedUserData });
    }

    // 2. 커뮤니티 데이터 로드 및 초기화
    const storedCommunityData = localStorage.getItem("CommunityData");
    if (!storedCommunityData || JSON.parse(storedCommunityData).length === 0) {
      console.log(
        "localStorage에 커뮤니티 데이터가 없으므로 communityMockData로 초기화"
      );
      setCommunityData({ type: "INIT", data: communityMockData });
      const maxMockCommunityId = communityMockData.reduce(
        (max, item) => Math.max(max, item.id),
        0
      );
      communityIdRef.current = maxMockCommunityId + 1;
      localStorage.setItem("CommunityData", JSON.stringify(communityMockData));
    } else {
      const parsedCommunityData = JSON.parse(storedCommunityData);
      console.log(
        "localStorage에서 커뮤니티 데이터 로드:",
        parsedCommunityData
      );
      const maxStoredCommunityId = parsedCommunityData.reduce(
        (max, item) => Math.max(max, item.id),
        0
      );
      communityIdRef.current = maxStoredCommunityId + 1;
      setCommunityData({ type: "INIT", data: parsedCommunityData });
    }

    setIsLoading(false); // 모든 데이터 로드/초기화 완료 후 로딩 상태 해제
  }, []);

  // 커뮤니티 관리기능
  const onCreateCommunity = (title, userName, date, text) => {
    setCommunityData({
      type: "CREATE",
      data: {
        id: communityIdRef.current++,
        title,
        userName,
        date,
        text,
      },
    });
  };

  const onUpdateCommunity = (contentID, answer) => {
    setCommunityData({
      type: "UPDATE",
      data: {
        id: contentID,
        answer,
      },
    });
  };

  const onDeleteCommunityContent = (contentID) => {
    setCommunityData({
      type: "DELETE",
      data: {
        id: contentID,
      },
    });
  };

  // 유저 관리기능
  const onCreate = (phoneNum, password, birth, isUserAgree, isUserConsent) => {
    console.log("DATA: ", data);
    if (!isUserAgree || !isUserConsent) {
      alert("필수사항을 동의해주세요!");
      return;
    }

    if (!Number(phoneNum)) {
      alert("전화번호는 숫자만 입력해주세요!");
      return;
    }

    if (data.find((item) => String(item.phoneNum) === String(phoneNum))) {
      alert("이미 가입된 전화번호입니다.");
      return;
    }
    if (phoneNum && password && birth) {
      var mission = [false, false, false];
      var boardWrite = [false, false, false];
      dispatch({
        type: "CREATE",
        data: {
          id: userIdRef.current++,
          phoneNum,
          password,
          birth,
          mission,
          boardWrite,
        },
      });
      alert("계정이 생성되었습니다.");
      nav("/");
    } else {
      alert("입력란을 채워주세요!");
    }
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
  const onLogin = (id) => {
    setLoginedId(id);
    if (id === "ADMIN") {
      setIslogin("ADMIN");
      return;
    }
    setIslogin("LOGIN");
  };
  const onLogout = () => {
    setLoginedId(null);
    setIslogin("none");
  };

  if (!isLoading) {
    console.log("아직 다 안올라왔다잉");
  }
  if (isLoading) {
    return <div>데이터를 로드하는 중입니다...</div>;
  }
  return (
    <>
      <DataStateContext.Provider
        value={{ data, communityData, isLogin, loginedId }}
      >
        <DataDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
            onLogin,
            onLogout,
            onCreateCommunity,
            onDeleteCommunityContent,
            onUpdateCommunity,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/NewAccount" element={<NewAccount />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/Kiosk" element={<KioskStart />}></Route>
            <Route path="/Kiosk/:1" element={<Kiosk />}></Route>
            <Route path="/KioskPay" element={<KioskPayMent />}></Route>
            <Route path="/KioskCardPay" element={<Kiosk_CardPayMent />}></Route>
            <Route path="/KioskFinal" element={<KioskFinal />}></Route>
            <Route
              path="/NaverBook/page01"
              element={<NaverBook_page01 />}
            ></Route>
            <Route
              path="/NaverBook/page02"
              element={<NaverBook_page02 />}
            ></Route>
            <Route
              path="/NaverBook/page03"
              element={<NaverBook_page03 />}
            ></Route>
            <Route
              path="/NaverBook/page04"
              element={<NaverBook_page04 />}
            ></Route>
            <Route
              path="/NaverBook/page05"
              element={<NaverBook_page05 />}
            ></Route>
            <Route path="/Map" element={<Map />} />
            <Route path="/Community" element={<Community />} />
            <Route
              path="/Community_content/:id"
              element={<Community_content />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </DataDispatchContext.Provider>
      </DataStateContext.Provider>
    </>
  );
}

export default App;
