/* eslint-disable no-unused-vars */
import './App.css'
import Stack from '@mui/material/Stack';
import Content from './components/Content';
import RightBar from './components/RightBar';
import Menu from './components/Menu';
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {

  const[theme, setTheme] = useState('light')

  const darkTheme = createTheme({
      palette: {
        mode: theme
      }
  });
  

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Container maxWidth=''>
          <Stack direction="row" spacing={2} justifyContent='space-between'>
            <Menu />      
            <Content />
            <RightBar />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
