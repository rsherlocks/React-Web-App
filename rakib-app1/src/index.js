import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './page/About';
import Contact from'./page/Contact';
import Portfalio from './page/Portfalio';
import { Route,
  Link,
  BrowserRouter as Router
 
} from '../node_modules/react-router-dom';
import * as serviceWorker from './serviceWorker';


const myrouter=(
<Router>

<div>
  <nav>
  
    <ul>
      <Link to="/">Home</Link> <span></span>

      <Link to="/about">About</Link> <span> </span> 

      <Link to="/contact">Contact</Link> <span> </span>

      <Link to="/portfalio">Portfalio</Link>
    </ul>
    </nav>
  <Route exact path="/" component={App}/>
  <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/portfalio" component={Portfalio}/>
</div>
</Router>

)






ReactDOM.render(
  myrouter,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
