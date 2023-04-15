import React from 'react';
import {
  InputGroup, Input,
} from '@chakra-ui/react';
// import { PhoneIcon } from '@chakra-ui/icons';
function SearchBar() {
  return (
    <div>
      <InputGroup>
        {/* <InputLeftElement pointerEvents="none" children={<PhoneIcon color="gray.300" />} /> */}
        <Input placeholder="Search" />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
