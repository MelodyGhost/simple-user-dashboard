import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
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
import { ReactNode, useState } from 'react';
import ContentDisplay from '../components/content-display';

const Home: NextPage = () => {
  const [tileView, setTileView] = useState(false);
  return (
    <Container maxW="container.lg" padding={'8'}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
                borderRadius={'30px'}
              />
            </InputGroup>
            <Stack direction={'row'} spacing="4">
              <Text minW="fit-content" fontWeight={'medium'}>
                Filter by:{' '}
              </Text>
              <RadioGroup>
                <Stack direction="row">
                  <Radio colorScheme={'blackAlpha'} value="1">
                    All
                  </Radio>
                  <Radio colorScheme={'blackAlpha'} value="2">
                    Male
                  </Radio>
                  <Radio colorScheme={'blackAlpha'} value="3">
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
        <ContentDisplay tileView={tileView} />
      </main>
    </Container>
  );
};

export default Home;
