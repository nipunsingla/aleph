import React from 'react';
import { useAuth0 } from "./auth/react-auth0-spa";
import Homepage from './pages/homepage/homepage'
import { Classroom2 } from './pages/classroom/Classroom2'
import { Group } from './pages/group/group'
import ChatBase from './pages/chat/ChatBase'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {statusPage} from './pages/statusPage/statusPage'
import {Feed} from './pages/feed/feed'
function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/classroom' component={Classroom2} />
            <Route path='/group' component={Group} />
            <Route path='/chat' component={ChatBase} />
            <Route path='/status' component={statusPage}/>
            <Route path='/feed' component={Feed}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;