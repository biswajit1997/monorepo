import React from "react";

const Pagination = ({
  questionsPerPage,
  totalQuestions,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let x = 1; x <= Math.ceil(totalQuestions / questionsPerPage); x++) {
    pageNumbers.push(x);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a
              onClick={() =>
                paginate(currentPage > 1 ? currentPage - 1 : currentPage)
              }
              href="#"
              className="page-link"
            >
              Back
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#"
                className={
                  currentPage == number ? "text-dark page-link" : "page-link"
                }
              >
                {number}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              onClick={() =>
                paginate(
                  Math.ceil(totalQuestions / questionsPerPage) > currentPage
                    ? currentPage + 1
                    : currentPage
                )
              }
              href="#"
              className="page-link"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
