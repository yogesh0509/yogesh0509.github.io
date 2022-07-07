import {
  ChakraProvider,
  extendTheme,
  Container
} from '@chakra-ui/react';
import Dashboard from './components/Dashboard';

const breakpoints = {
  sm: '769px',
  lg: '1536px'
}

const theme = extendTheme({ breakpoints });

function App() {
  return (
    <ChakraProvider theme={theme}>

        <Dashboard />
    </ChakraProvider>
  );
}

export default App;
