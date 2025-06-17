import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import MyPage from "./pages/MyPage";
import Kiosk from "./pages/Kiosk";
import NaverBook from "./pages/NaverBook";
import Map from "./pages/Map";
import Community from "./pages/Community";

function App() {
  return (
    <>
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
