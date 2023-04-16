import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Inter, serif',
    body: 'Inter, serif',
    button: 'Inter, serif',
  },
  colors: {
    brand: {
      100: '#7BD0FF',
    },
  },
});

export default theme;
