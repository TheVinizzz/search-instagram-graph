import './App.css';
import {createBrowserHistory} from "history";
import {Router} from 'react-router-dom';
import Routes from './Router';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
