import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import { useAuth0 } from "./auth/react-auth0-spa";
import Homepage from './pages/homepage/homepage'
import { Route, Switch } from 'react-router-dom';
import './App.css';

async function App() {
  const { loading } = await useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
     
          <Route path='/' exact component={Homepage} />
      
      </header>
    </div>
  );
}

export default App;