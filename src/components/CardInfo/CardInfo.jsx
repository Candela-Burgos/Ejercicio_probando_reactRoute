import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heading, Image, Text, Button, HStack, Box } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

const CardInfo = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setDetails(res.data));
  }, []);

  return (
    <HStack w="20%" justify="center">
      <Box>
        <Image src={details.image} alt={details.name} />
        <Heading fontSize="1.5em">{details.name}</Heading>
        <Text>{details.status}</Text>
        <Text>{details.species}</Text>
        <Text>{details.gender}</Text>
        <Link to={'/characters'}>
          <Button>Back</Button>
        </Link>
      </Box>
    </HStack>
  );
};

export { CardInfo };
