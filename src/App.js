import './App.css';
import 'tailwindcss/dist/tailwind.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home/home';
import Collection from './store/colecction/index';
import Neceseres from './store/neceseres/index';
import Vinchas from './store/vinchas/index';
import About from './about/about';
import Location from './location/location';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/store' component={Collection} />
        <Route path='/neceseres' component={Neceseres} />
        <Route path='/vinchas' component={Vinchas} />
        <Route path='/about' component={About} />
        <Route path='/location' component={Location} />
      </Switch>
    </Router>
  );
}

export default App;
