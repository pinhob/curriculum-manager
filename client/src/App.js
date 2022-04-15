import { Switch, Route } from 'react-router-dom';
import Curriculums from './pages/Curriculums';
import Curriculum from './pages/Curriculum';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
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
