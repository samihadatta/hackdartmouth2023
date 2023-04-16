import React, { useState, useEffect } from 'react';
import {
  Box, Checkbox, CheckboxGroup, Stack,
} from '@chakra-ui/react';
import './style.scss';

function Filter(props) {
  // eslint-disable-next-line react/prop-types
  const { setFilter } = props;
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(['bathroom', 'safesex', 'menstrual', 'community', 'clinic']);

  useEffect(() => {
    setFilter(selectedCheckboxes);
  });

  const handleCheckboxChange = (values) => {
    setSelectedCheckboxes(values);
    console.log(values);
  };
  return (
    <div>
      <Box m={4}>
        <CheckboxGroup value={selectedCheckboxes} onChange={handleCheckboxChange}>
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <div className="filterContainer bathroom">
              <Checkbox colorScheme="white" value="bathroom">Gender-Neutral Bathrooms</Checkbox>
            </div>
            <div className="filterContainer safesex">
              <Checkbox colorScheme="white" value="safesex">Safe Sex Products</Checkbox>
            </div>
            <div className="filterContainer menstrual">
              <Checkbox colorScheme="white" value="menstrual">Menstrual Products</Checkbox>
            </div>
            <div className="filterContainer community">
              <Checkbox colorScheme="white" value="community">Community Spaces</Checkbox>
            </div>
            <div className="filterContainer clinic">
              <Checkbox colorScheme="white" value="clinic">Health Clinics</Checkbox>
            </div>
          </Stack>
        </CheckboxGroup>
      </Box>

    </div>
  );
}

export default Filter;
