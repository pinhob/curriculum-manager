import Curriculums from './pages/Curriculums';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Curriculums />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
