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

const TableView = () => {
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
          {Array(4)
            .fill('')
            .map((_, key) => {
              return (
                <Tr key={key}>
                  <Td>
                    <Stack spacing="20px" direction="row" align="center">
                      <Avatar src="https://bit.ly/dan-abramov" />
                      <Box>
                        <Text fontSize={'md'} fontWeight="bold">
                          Dan Avrahomov
                        </Text>
                        <Text fontSize={'sm'} fontWeight="light">
                          awsome@dan.com
                        </Text>
                      </Box>
                    </Stack>
                  </Td>
                  <Td>millimetres (mm)</Td>
                  <Td color="#999">25.4</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
