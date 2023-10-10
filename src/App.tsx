import './App.css'
import { Box } from "@mui/material";
import { Access, Accommodation, Carte, Footer, Home, Navigation } from './components';

function App() {

  return (
    <Box>
      <Navigation />
      <Home />
      <Access />
      <Carte />
      <Accommodation />
      <Footer />
    </Box>
  )
}

export default App
