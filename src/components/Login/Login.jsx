import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({ setUser, user }) => {
  const toast = useToast();
  const [values, setValues] = useState({
    name: '',
    password: ''
  })

  const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate(values)
    if (Object.keys(error).length === 0) {
      toast({
        title: `Welcome ${values.name}!`,
        description: "We've created your account for you.",
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      setUser(values.name)
      return
    }
    if (Object.keys(error).length >= 1) {
      toast({
        title: 'Ups!',
        description: 'We had errors to create your account',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
    return error
  }

  const validate = (values) => {
    const error = {};
    if (values.name.length === 0) {
      error.name = 'Complete este campo'
    }
    if (values.password.length === 0) {
      error.password = 'Complete este campo';
    }
    setError(error)
    return error
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  if (user) {
    return <Navigate to="/profile"/>
  }
  return (
    <Box as="form" onSubmit={handleSubmit}>
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        autoComplete="off"
        placeholder="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        autoComplete="off"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <Input type="submit" value="Send"/>
    </FormControl>
    </Box>
  );
};

export { Login };
