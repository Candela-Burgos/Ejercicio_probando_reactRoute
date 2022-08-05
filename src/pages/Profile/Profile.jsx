import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Profile = ({ user }) => {
  if (!user) {
    return <Navigate to="/" />
  }

  return (
    <Box>
      <Image fallbackSrc="https://via.placeholder.com/150" />
      <Heading>{user}</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et qui quae
        nostrum ad provident ut minima magni deleniti. Sapiente quam,
        dignissimos deserunt delectus labore amet temporibus fugit qui pariatur
        quos?
      </Text>
    </Box>
  );
};

export { Profile };
