import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Exercises from './pages/Exercises';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/exercise/:id" element={<Exercises />} />
        </Routes>
      <Footer />
      </Box>
    </div>
  );
}

export default App;
