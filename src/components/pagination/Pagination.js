import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
import { totalOfArticles, articlesPerPage } from '../../data/getArticles';
import { usePage } from '../../data/PageProvider';
import { actionTypes } from '../../data/pageReducer';

const Pagination = () => {
  const [state, dispatch] = usePage(); // eslint-disable-line

  const handleClickPage = ({ selected }) => {
    const page = selected + 1;
    dispatch({ type: actionTypes.CHANGE_PAGE, page });
    window.scroll(0, 0);
  };

  return (
    <>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me page-link'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(totalOfArticles / articlesPerPage)}
        containerClassName={'pagination justify-content-center mt-1'}
        pageClassName={'page-item'}
        activeClassName={'active'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        disabledClassName={'disabled'}
        onPageChange={handleClickPage}
      />
    </>
  );
};

export default Pagination;
