import { HStack, IconButton } from '@chakra-ui/react';
import React from 'react';
import TableView from './table-view';
import TileView from './tile-view';
import { FaBackward, FaForward } from 'react-icons/fa';
import usePagination from '../../hooks/usePagination';
import { IShowUserInfo, Users } from '../../types/Users';

const PAGE_LIMIT = 10;

const ContentDisplay = ({
  tileView,
  users,
}: {
  users: Users;
  tileView: boolean;
}) => {
  const { currentPage, totalPage, jumpToPage, setNextPage, setPreviousPage } =
    usePagination(users.length, PAGE_LIMIT);
  const skip = (currentPage - 1) * PAGE_LIMIT;
  return (
    <div>
      {tileView ? (
        <TileView users={users.slice(skip, skip + PAGE_LIMIT)} />
      ) : (
        <TableView users={users.slice(skip, skip + PAGE_LIMIT)} />
      )}
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
