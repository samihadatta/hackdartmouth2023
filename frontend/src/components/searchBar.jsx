import React from 'react';
import { Input } from '@chakra-ui/react';

function SearchBar() {
  return (
    <div>
      <form>
        <Input placeholder="Search" size="lg" w="30em" />
      </form>
    </div>
  );
}

export default SearchBar;
