import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/AboutPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TeamPage from './TeamPage/TeamPage'
import VisionPage from './VisionPage/VisionPage'
import theme from './theme'

ReactDOM.render(
  <>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="vision" element={<VisionPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
)
