import React from "react";
import "./Pagination.css"; // 필요하다면 CSS 파일도 생성

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination-list">
        {/* 이전 페이지 버튼 */}
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-link"
          >
            이전
          </button>
        </li>

        {/* 페이지 번호들 */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}

        {/* 다음 페이지 버튼 */}
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-link"
          >
            다음
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
