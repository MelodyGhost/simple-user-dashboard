import { Avatar, Box, HStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { BsPerson, BsCalendar2Check } from 'react-icons/bs';
import { Users } from '../../../types/Users';

const TileView: React.FC<{ users: Users }> = ({ users }) => {
  return (
    <Wrap spacing={'15px'} m="8">
      {users.map((user, key) => {
        const {
          email,
          name: { last: lName, first: fName },
          picture: { thumbnail: image },
          login: { username },
          registered: { date: registered },
        } = user;
        return (
          <WrapItem
            my="2"
            p="2"
            gap="2"
            rounded="md"
            boxShadow={'2xl'}
            key={key}
            w="280px"
            overflow={'hidden'}
          >
            <Avatar src={image} />
            <Box>
              <Text fontSize={'md'} fontWeight="bold">
                {`${lName}, ${fName}`}
              </Text>
              <Text fontSize={'sm'}>{email}</Text>
              <HStack spacing={'2'}>
                <BsPerson />
                <Text fontSize={'sm'} color="#777" fontWeight={'semibold'}>
                  {username}
                </Text>
              </HStack>
              <HStack spacing={'2'}>
                <BsCalendar2Check />
                <Text fontSize={'sm'} color="#777" fontWeight={'semibold'}>
                  {registered.slice(0, 10)}
                </Text>
              </HStack>
            </Box>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default TileView;
