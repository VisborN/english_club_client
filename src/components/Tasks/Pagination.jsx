import React from 'react';
import ReactPaginate from 'react-paginate';
import './Tasks.scss';

export default function Pagination({ handlePageClick, pageCount }) {
  return (
    <ReactPaginate
      className="paginations"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
