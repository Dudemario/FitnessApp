import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
        <Navbar />
        <Router>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Router>
      <Footer />
      </Box>
    </div>
  );
}

export default App;
