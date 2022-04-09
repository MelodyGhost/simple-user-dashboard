import {
  Container,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ContentDisplay from '../components/content-display';
import { Users } from '../types/Users';

const Home: NextPage = () => {
  const [users, setUsers] = useState<Users>([]);
  const [filteredUsers, setFilteredUsers] = useState<Users>([]);
  const [filterBy, setFilterBy] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [tileView, setTileView] = useState(false);

  useEffect(() => {
    void fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then((res) => setUsers(res.results as Users));
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    const combineSearchResult = users
      .filter((user) => (filterBy === 'all' ? true : user.gender === filterBy))
      .filter((user) => {
        const {
          name: { last, first },
          email,
          login: { username },
        } = user;
        let mergedField = `${first} ${last} ${email} ${username}`;
        return mergedField.includes(searchQuery);
      });
    setFilteredUsers(combineSearchResult);
  }, [searchQuery, users, filterBy]);

  return (
    <Container maxW="container.lg" padding={'8'}>
      <Head>
        <title>Simplest User DashBoard</title>
        <meta
          name="description"
          content="Did for a interview assignment using typescript, nextjs, chakra etc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text fontSize={'3xl'} fontWeight="semibold" color={'#555'}>
          User List
        </Text>
        <Stack
          direction={['column', 'row']}
          justifyContent={'space-between'}
          my="4"
          align="center"
        >
          <Stack direction={['column', 'row']} spacing="16" align={'center'}>
            <InputGroup size="sm" minW="150px">
              {/* eslint-disable-next-line react/no-children-prop */}
              <InputLeftElement pointerEvents="none" children={'🔍'} />
              a
              <Input
                variant="outline"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                borderRadius={'30px'}
              />
            </InputGroup>
            <Stack direction={'row'} spacing="4">
              <Text minW="fit-content" fontWeight={'medium'}>
                Filter by:{' '}
              </Text>
              <RadioGroup
                onChange={(param) => setFilterBy(param)}
                value={filterBy}
              >
                <Stack direction="row">
                  <Radio colorScheme={'blackAlpha'} value="all">
                    All
                  </Radio>
                  <Radio colorScheme={'blackAlpha'} value="male">
                    Male
                  </Radio>
                  <Radio colorScheme={'blackAlpha'} value="female">
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>
            </Stack>
          </Stack>
          <Stack direction={'row'} align="center" w="fit-content">
            <FormLabel htmlFor="tile-view" mb="0" minW="fit-content">
              Tile View
            </FormLabel>
            <Switch onChange={() => setTileView((v) => !v)} id="tile-view" />
          </Stack>
        </Stack>
        {/* Show the content */}
        <ContentDisplay users={filteredUsers} tileView={tileView} />
      </main>
    </Container>
  );
};

export default Home;
