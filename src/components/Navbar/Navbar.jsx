import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ setUser, user }) => {
  return (
    <Flex direction="row" justify="space-around">
      <NavLink to="/">
        <Text fontSize="2em">Home</Text>
      </NavLink>
      <NavLink to="/about">
        <Text fontSize="2em">About</Text>
      </NavLink>
      <NavLink to="/characters">
        <Text fontSize="2em">Characters</Text>
      </NavLink>
      <NavLink to="/profile">
        <Button>Profile</Button>
      </NavLink>
      {user
        ? (
        <Link to="/">
          <Button onClick={() => setUser(false)}>Log Out</Button>
        </Link>
          )
        : (
        <Link to="/login">
          <Button>Log In</Button>
        </Link>
          )}
    </Flex>
  );
};

export { Navbar };
