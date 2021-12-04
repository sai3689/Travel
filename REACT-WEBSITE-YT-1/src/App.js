import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Contacts from './components/pages/Contacts';
import SignUp from './components/pages/SignUp';
import SignUp2 from './components/pages/SignUp2';
function App() 
{
 return (
   <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route exact path='/contacts' component={Contacts} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/signup2' component={SignUp2} />
        </Switch>
      </Router>
    </>
   );
}
export default App;
