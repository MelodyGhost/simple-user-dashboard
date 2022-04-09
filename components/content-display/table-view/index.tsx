import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Avatar,
  Box,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { IShowUserInfo, Users } from '../../../types/Users';

const TableView: React.FC<{ users: Users }> = ({ users }) => {
  return (
    <TableContainer>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Registration Date</Th>
            <Th>Username</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, key) => {
            const {
              email,
              name: { last: lName, first: fName },
              picture: { thumbnail: image },
              login: { username },
              registered: { date: registered },
            } = user;
            return (
              <Tr key={key}>
                <Td>
                  <Stack spacing="20px" direction="row" align="center">
                    <Avatar src={image} />
                    <Box>
                      <Text fontSize={'md'} fontWeight="bold">
                        {`${lName}, ${fName}`}
                      </Text>
                      <Text fontSize={'sm'} fontWeight="light">
                        {email}
                      </Text>
                    </Box>
                  </Stack>
                </Td>
                <Td>{registered}</Td>
                <Td color="#999">{username}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
