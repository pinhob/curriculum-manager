import { Switch, Route } from 'react-router-dom';
import Curriculums from './pages/Curriculums';
import Curriculum from './pages/Curriculum';
import NewCurriculum from './pages/NewCurriculum';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/curriculo/novo">
          <NewCurriculum />
        </Route>
        <Route exact path="/curriculos/:id">
          <Curriculum />
        </Route>
        <Route exact path="/">
          <Curriculums />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
