import React from 'react';
import {
  Box, Checkbox, CheckboxGroup, Stack,
} from '@chakra-ui/react';

function Filter() {
  return (
    <div>
      <Box m={4}>
        <CheckboxGroup defaultValue={['bathroom', 'safesex', 'menstrual', 'community', 'clinics']}>
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
