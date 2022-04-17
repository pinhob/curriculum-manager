import { Routes, Route } from 'react-router-dom';
import Curriculums from './pages/Curriculums';
import Curriculum from './pages/Curriculum';
import NewCurriculum from './pages/NewCurriculum';
import { GlobalStyle } from './styles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Curriculums />} />
        <Route path="/curriculo/novo" element={<NewCurriculum />} />
        <Route path="/curriculos/:id" element={<Curriculum />} />
      </Routes>
    </div>
  );
}

export default App;
