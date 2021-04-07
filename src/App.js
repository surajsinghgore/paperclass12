
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import Info from './Info';
import Web from './Web';
import Error from './Error';
import Home from './Home';
import Hindi from './Hindi';
import English from './English';
import Footer from './Footer';
function App() {
  return (
    <>
 
<Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/info" component={Info} />
           <Route exact path="/eng" component={English} />
           <Route exact path="/hindi" component={Hindi} />
           <Route exact path="/paperclass12" component={Home}/>
           <Route exact path="/paperclass12/" component={Home}/>
           <Route exact path="/paperclass12/" component={Home}/>
           <Route exact path="/web" component={Web}/>
           <Route exact component={Error} />
        </Switch>

</>
    
  );
}

export default App;
