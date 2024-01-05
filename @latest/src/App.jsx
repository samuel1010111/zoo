// App.jsx


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './component/Home';
import AnimalPage from './AnimalPage';
import BirdPage from './BirdPage';
import InsectPage from './InsectPage';
import FishPage from './FishPage';
import AboutPage from './component/About';



export default function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Zoo</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/animal">Animal</Link>
            <Link to="/bird">Bird</Link>
            <Link to="/insect">Insect</Link>
            <Link to="/fish">Fish</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="search-button">Search</div>
        </header>

        <Switch>
          <Route path="/animal" component={AnimalPage} />
          <Route path="/bird" component={BirdPage} />
          <Route path="/insect" component={InsectPage} />
          <Route path="/fish" component={FishPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>

        <footer>
          © 2023 Samuel. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
