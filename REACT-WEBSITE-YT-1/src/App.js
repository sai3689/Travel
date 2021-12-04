import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Homepage from './components/pages/Homepage';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
function App() 
{
  const [ user, setLoginUser] = useState({})
 return (
   <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route exact path="/homepage" component={Homepage} >
          </Route>
          <Route path="/login" component={Login} >
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register" component={Register} >
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
   );
}
export default App;
