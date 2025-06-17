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
        <Route path="/" element={<Login />} />
        <Route path="/" element={<NewAccount />} />
        <Route path="/" element={<MyPage />} />
        <Route path="/" element={<Kiosk />} />
        <Route path="/" element={<NaverBook />} />
        <Route path="/" element={<Map />} />
        <Route path="/" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
