import React from 'react';
import { useAuth0 } from "./auth/react-auth0-spa";
import Homepage from './pages/homepage/homepage'
import { Classroom2 } from './pages/classroom/Classroom2'
import { Group } from './pages/group/group'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Chat} from './pages/chat/chat.component'
import './App.css';

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
            <Route exact path='/classroom' component={Classroom2} />
            <Route exact path='/group' component={Group} />
            <Route exact path='/chat' component={Chat}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;