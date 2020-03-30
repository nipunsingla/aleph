<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
import NavBar from "./components/NavBar";
import { useAuth0 } from "./auth/react-auth0-spa";
>>>>>>> cb43805070364271d1a5aacfef932cb8b360a324
import './App.css';
import Header from './components/header/header'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
class App extends Component {


  render() {
    return(
      <div>

      <Header/>
      <Switch>
        <Route  path="/" component={Homepage} />
      </Switch>

<<<<<<< HEAD
=======
function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
>>>>>>> cb43805070364271d1a5aacfef932cb8b360a324
    </div>
    )
  }
}

export default App;

