import { Routes, Route } from "react-router-dom";
import NaverBook_page01 from "../components/NaverBookPages/NaverBook_page01";
import NaverBook_page02 from "../components/NaverBookPages/NaverBook_page02";
import NaverBook_page03 from "../components/NaverBookPages/NaverBook_page03";
import NaverBook_page04 from "../components/NaverBookPages/NaverBook_page04";

const NaverBook = () => {
  return (
    <div>
      <h4>hi</h4>
      <Routes>
        <Route path="/" element={<NaverBook_page01 />} />
        <Route path="page01" element={<NaverBook_page01 />} />
        <Route path="page02" element={<NaverBook_page02 />} />
        <Route path="page03" element={<NaverBook_page03 />} />
        <Route path="page04" element={<NaverBook_page04 />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default NaverBook;
