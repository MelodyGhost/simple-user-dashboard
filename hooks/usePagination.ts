import { useEffect, useState } from 'react';

const usePagination = (totalItems: number, pageLimit: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const setNextPage = () => {
    if (currentPage === totalPage) return;

    setCurrentPage((page) => page + 1);
  };

  const setPreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((page) => page - 1);
  };

  const jumpToPage = (pageNumber: number) => {
    if (pageNumber > totalPage || pageNumber < 1) return;

    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // calculate total page
    setTotalPage(Math.ceil(totalItems / pageLimit));

    // check current page
    setCurrentPage((page) => {
      if (Math.ceil(totalItems / pageLimit) < page) return 1;
      return page;
    });
  }, [totalItems, pageLimit]);

  return { currentPage, totalPage, setNextPage, setPreviousPage, jumpToPage };
};

export default usePagination;
