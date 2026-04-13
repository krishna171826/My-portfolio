import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IslandNavbar } from './components/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Competences from './pages/Competences.jsx';
import Project from './pages/Project.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <IslandNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;