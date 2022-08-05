import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card/Card';
import { Form } from '../../components/Form/Form';
import { Box, Button, Flex, Input, Select, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const Characters = () => {
  const [params, setParams] = useSearchParams({});
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(parseInt(params.get('page') || 1));

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}${filter}`)
      .then((res) => setCharacters(res.data.results));
  }, [page, filter]);

  return (
    <>
      <Form setFilter={setFilter} setPage={setPage} page={page} />
      <Flex
        width="100%"
        justify="center"
        position="column"
        wrap="wrap"
        gap="10"
      >
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </Flex>
      <Box
        m="auto"
        w="14em"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          p="1em"
          isDisabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Back
        </Button>
        <Text p="1em">{page}</Text>
        <Button p="1em" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Box>
    </>
  );
};

export { Characters };
