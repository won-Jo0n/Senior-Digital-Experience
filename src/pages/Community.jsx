import "./Community.css";
import { useContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { DataStateContext } from "../App";
import { DataDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const Community = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const data = useContext(DataStateContext);
  const nav = useNavigate();
  const [searchingText, setSearchingText] = useState("");
  const { onDeleteCommunityContent } = useContext(DataDispatchContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // displayedPosts는 현재 페이지에 보여줄 게시물
  const [displayedPosts, setDisplayedPosts] = useState([]);
  // filteredAndSortedData는 현재 검색 및 정렬된 전체 게시물 (페이징의 기준)
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([]);

  // 1. 컴포넌트 로드 시, 또는 data.communityData 변경 시 초기 정렬/필터링 적용
  useEffect(() => {
    if (data.communityData) {
      // 모든 게시물을 ID 기준으로 최신순 정렬
      const sortedData = [...data.communityData].sort((a, b) => b.id - a.id);
      setFilteredAndSortedData(sortedData); // 초기에는 모든 게시물이 검색/정렬된 데이터
    }
  }, [data.communityData]); // data.communityData가 변경될 때만 이 useEffect 실행

  // 2. filteredAndSortedData, currentPage, postsPerPage가 변경될 때마다
  // 현재 페이지에 보여줄 게시물 업데이트
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setDisplayedPosts(
      filteredAndSortedData.slice(indexOfFirstPost, indexOfLastPost)
    );
  }, [filteredAndSortedData, currentPage, postsPerPage]); // 의존성 추가

  // 페이지 변경 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onModal = () => {
    if (data.isLogin === "LOGIN" || data.isLogin === "ADMIN") {
      setModalOpen(true);
    } else {
      alert("로그인 후 이용해주세요!");
      nav("/Login");
    }
  };

  // 검색 버튼 클릭 시 또는 Enter 키 입력 시 실행되는 검색 함수
  const searching = () => {
    setCurrentPage(1); // 검색 시 항상 첫 페이지로 이동

    // 원본 데이터를 최신순으로 정렬
    const sortedOriginalData = [...data.communityData].sort(
      (a, b) => b.id - a.id
    );

    // 정렬된 원본 데이터를 바탕으로 검색어 필터링
    const result = sortedOriginalData.filter(
      (item) => item.title.toLowerCase().includes(searchingText.toLowerCase())
      // item.userName.toLowerCase().includes(searchingText.toLowerCase()) ||
      // item.text.toLowerCase().includes(searchingText.toLowerCase())
    );
    setFilteredAndSortedData(result); // 검색 및 정렬된 결과를 페이징의 기준으로 설정
  };

  // 검색어 입력 필드에서 엔터 키를 눌렀을 때 검색 실행
  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      searching();
    }
  };

  const handleDeleteContent = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDeleteCommunityContent(id);
      alert("글을 삭제하였습니다.");
      // 삭제 후 useEffect가 data.communityData 변경을 감지하여 자동으로 업데이트
      // 그리고 필요시 페이지 조절 (예: 삭제로 인해 현재 페이지가 비게 되는 경우)
      // 이 부분은 useEffect가 자동으로 처리하도록 두어도 되지만,
      // 더 명확한 제어가 필요하다면 다음 페이지 조정 로직을 여기에 추가할 수 있습니다.
      // 예를 들어, 현재 페이지에 게시물이 없으면 이전 페이지로 이동
      // (그러나 useEffect가 새로운 data.communityData를 기반으로 다시 계산하므로 보통 필요 없음)
    } else {
      alert("취소 하셨습니다");
    }
  };

  return (
    <div className="Community">
      <div className="Community_logo">
        <Logo />
      </div>
      <div className="search">
        <input
          onKeyDown={handleSearchKeyDown}
          placeholder="검색어를 입력해주세요"
          onChange={(event) => {
            setSearchingText(event.target.value);
          }}
          value={searchingText}
        />
        <Button text={"검색"} onClick={searching} />
        <Button text={"글작성"} onClick={onModal} />
      </div>
      {modalOpen ? <Modal setModal={setModalOpen} /> : null}
      <div className="content-wrapper">
        <ul>
          {displayedPosts.length > 0 ? (
            displayedPosts.map((item) => (
              <li key={item.id} className="community-content">
                <div
                  className="community-title"
                  onClick={() => {
                    nav(`/Community_content/${item.id}`);
                  }}
                >
                  {item.title}
                </div>
                <div className="community-date">{item.date}</div>
                <div className="community-userName">{item.userName}</div>
                {data.isLogin === "ADMIN" ? (
                  <Button
                    text={"글 삭제"}
                    onClick={() => {
                      handleDeleteContent(item.id);
                    }}
                  />
                ) : null}
              </li>
            ))
          ) : (
            <p className="no-posts-message">게시물이 없습니다.</p>
          )}
        </ul>
        {/* 검색 결과가 없을 때 Pagination을 숨기거나 다른 처리를 할 수 있음 */}
        {filteredAndSortedData.length > 0 && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredAndSortedData.length} // 검색 및 정렬된 게시물의 총 개수 전달
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Community;
