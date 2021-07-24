import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import _ from "lodash";

const Pagination = (props) => {
  const { pageSize, totalCount, onPagination, currentPage } = props;
  const pageCount = Math.ceil(totalCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  // console.log(totalCount);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination" style={{cursor: "pointer"}}>
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <Link className="page-link" onClick={() => onPagination(page)} to="#">
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number,
  totalCount: PropTypes.number,
  onPagination: PropTypes.func,
  currentPage: PropTypes.number
};

export default Pagination;
