import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects';
import About from './pages/about.tsx'
/* import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/about" element={<About/>} />

    </Routes>    
  );
}

export default App;

      
/*       <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<NotFound/>} /> */