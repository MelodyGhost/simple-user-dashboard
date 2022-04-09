import { Avatar, Box, HStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

const TileView = () => {
  return (
    <Wrap spacing={'15px'} m="8">
      {Array(3)
        .fill('')
        .map((_, key) => (
          <WrapItem p="4" gap="2" rounded="md" boxShadow={'2xl'} key={key}>
            <Avatar src="https://bit.ly/dan-abramov" />
            <Box>
              <Text fontSize={'md'} fontWeight="bold">
                Dan Avrahomov
              </Text>
              <Text fontSize={'sm'}>awsome@dan.com</Text>
              <Text fontSize={'sm'} color="#777" fontWeight={'semibold'}>
                DanAvrahomov
              </Text>
              <Text fontSize={'sm'} color="#777" fontWeight="semibold">
                registered
              </Text>
            </Box>
          </WrapItem>
        ))}
    </Wrap>
  );
};

export default TileView;
