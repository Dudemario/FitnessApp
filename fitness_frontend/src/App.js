import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import IndividualExercises from './pages/IndividualExercises';
import Exercises from './pages/Exercises';
import MakePost from './pages/MakePost';
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
          <Route path = "/exercises" element={<Exercises />} />
          <Route path = "/exercise/:id" element={<IndividualExercises />} />
          <Route path = "/create-post/" element={<MakePost />} />
        </Routes>
      <Footer />
      </Box>
    </div>
  );
}

export default App;
