import './App.css'
import Stack from '@mui/material/Stack';
import Content from './components/Content';
import RightBar from './components/RightBar';
import Menu from './components/Menu';
import { Box, Container } from '@mui/material';
import NavBar from './components/NavBar';

function App() {
  

  return (
    <Box>
      <NavBar />
      <Container maxWidth=''>
        <Stack direction="row" spacing={2} justifyContent='space-between'>
          <Menu />      
          <Content />
          <RightBar />
        </Stack>
      </Container>
    </Box>
  )
}

export default App
