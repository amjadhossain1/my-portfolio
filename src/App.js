import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Achievement from './components/Achievement/Achievement';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/achievement">
              <Achievement/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>      
        </Router>
    </div>
  );
}

export default App;
