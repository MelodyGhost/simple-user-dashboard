import { HStack, IconButton } from '@chakra-ui/react';
import React from 'react';
import TableView from './table-view';
import TileView from './tile-view';
import { FaBackward, FaForward } from 'react-icons/fa';
import usePagination from '../../hooks/usePagination';

const ContentDisplay = ({ tileView }: { tileView: boolean }) => {
  const { currentPage, totalPage, jumpToPage, setNextPage, setPreviousPage } =
    usePagination(50, 10);
  console.log(currentPage, totalPage);
  return (
    <div>
      {tileView ? <TileView /> : <TableView />}
      <HStack spacing={'10px'} justifyContent="flex-end" my="2">
        <IconButton
          aria-label="previous page"
          onClick={setPreviousPage}
          disabled={currentPage === 1}
          icon={<FaBackward />}
        />
        {Array(totalPage)
          .fill('')
          .map((_, key) => {
            return (
              <IconButton
                key={key + 1}
                aria-label={'' + key + 1}
                onClick={() => jumpToPage(key + 1)}
                colorScheme={currentPage === key + 1 ? 'blue' : 'gray'}
                icon={<>{key + 1}</>}
              />
            );
          })}
        <IconButton
          aria-label="Nex page"
          onClick={setNextPage}
          disabled={currentPage === totalPage}
          icon={<FaForward />}
        />
      </HStack>
    </div>
  );
};

export default ContentDisplay;
