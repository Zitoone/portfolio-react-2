import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects';
import About from './pages/About.tsx'
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>    
  );
}

export default App;

      
      
      