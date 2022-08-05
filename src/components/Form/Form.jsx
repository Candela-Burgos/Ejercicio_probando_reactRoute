import { Flex, Input, Select } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Form = ({ setFilter, setPage, page }) => {
  const [params, setParams] = useSearchParams({});
  const [valueName, setValueName] = useState(params.get('name') || '');
  const [valueStatus, setValueStatus] = useState(params.get('status') || '');
  const [valueGender, setValueGender] = useState(params.get('gender') || '');

  useEffect(() => {
    setFilter(`&name=${valueName}&status=${valueStatus}&gender=${valueGender}`);
  }, [valueName, valueStatus, valueGender]);

  useEffect(() => {
    setParams({
      page,
      name: valueName,
      status: valueStatus,
      gender: valueGender,
    });
  }, [valueName, valueStatus, valueGender, page]);

  return (
    <Flex gap="10" m="1em">
      <Input
        bgColor="#ffffff10"
        name="name"
        placeholder="Name"
        value={valueName}
        onChange={(e) => {
          setValueName(e.target.value);
          //   handleParams();
        }}
      />
      <Select
        bgColor="#ffffff10"
        name="status"
        placeholder="Status"
        onChange={(e) => {
          setValueStatus(e.target.value);
          //   handleParams();
        }}
      >
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select
        bgColor="#ffffff10"
        name="gender"
        placeholder="Gender"
        onChange={(e) => {
          setValueGender(e.target.value);
          //   handleParams();
        }}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Select>
    </Flex>
  );
};

export { Form };
