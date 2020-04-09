import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import { useAuth0 } from "./auth/react-auth0-spa";
import Homepage from './pages/homepage/homepage'
import {Classroom2} from './pages/classroom/Classroom2'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
          <Router>
            <Switch>
              <Route exact path='/'  component={Homepage} />
              <Route exact path='/classroom'  component={Classroom2} /> 
            </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;