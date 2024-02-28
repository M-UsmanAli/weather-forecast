import { Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box backgroundImage="url('https://images.pexels.com/photos/417122/pexels-photo-417122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        backgroundSize="cover"
        backgroundPosition="center"
        minHeight="100vh" // Ensure the box covers the entire viewport height
        display="flex"
        flexDirection="column">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
)
