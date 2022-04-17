import { Switch, Route } from 'react-router-dom';
import Curriculums from './pages/Curriculums';
import Curriculum from './pages/Curriculum';
import NewCurriculum from './pages/NewCurriculum';
import { GlobalStyle } from './styles';

function App() {
  return (
    <div>
      <GlobalStyle />
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
