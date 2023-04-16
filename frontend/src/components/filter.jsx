import React, { useState } from 'react';
import {
  Box, Checkbox, CheckboxGroup, Stack,
} from '@chakra-ui/react';

function Filter(props) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(['bathroom', 'safesex', 'menstrual', 'community', 'clinics']);

  const handleCheckboxChange = (values) => {
    setSelectedCheckboxes(values);
    console.log(values);
  };
  return (
    <div>
      <Box m={4}>
        <CheckboxGroup value={selectedCheckboxes} onChange={handleCheckboxChange}>
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox value="bathroom">Gender-Neutral Bathrooms</Checkbox>
            <Checkbox value="safesex">Safe Sex Products</Checkbox>
            <Checkbox value="menstrual">Menstrual Products</Checkbox>
            <Checkbox value="community">Community Spaces</Checkbox>
            <Checkbox value="clinics">Health Clinics</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>

    </div>
  );
}

export default Filter;
