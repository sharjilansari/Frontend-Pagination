import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage);
  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && <li className="page-item"><a href="!#" className="page-link" onClick={() => paginate(currentPage - 1)}>Prev</a></li>}
        {pageNumbers.map((number) => (
            <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        {currentPage < pageNumbers.length && <li className="page-item"><a href="!#" className="page-link" onClick={() => paginate(currentPage + 1)}>Next</a></li>}
      </ul>
    </nav>
  );
};
