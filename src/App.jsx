import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import MyPage from "./pages/MyPage";
import Kiosk from "./pages/Kiosk";
import NaverBook from "./pages/NaverBook";
import Map from "./pages/Map";
import Community from "./pages/Community";
import Popup from "./components/Popup";
import { Routes, Route } from "react-router-dom";

function App() {
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: id,
        createDate,
        emotionId,
        content,
      },
    });
  };
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <button
        onClick={() => {
          <Popup></Popup>;
        }}
      >
        qwer
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NewAccount" element={<NewAccount />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Kiosk" element={<Kiosk />} />
        <Route path="/NaverBook" element={<NaverBook />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
