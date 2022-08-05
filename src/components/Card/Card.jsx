import { Heading, Image, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ character }) => {
  const { image, name, status, species, gender, id } = character;
  return (
    <VStack w="20%">
      <Image src={image} alt={name} />
      <Heading fontSize="1.5em" color="white">
        {name}
      </Heading>
      <Link to={`/characters/${id}`}>
        <Button>See Details</Button>
      </Link>
    </VStack>
  );
};

export { Card };
