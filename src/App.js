import React from 'react';
import {withAuthenticator} from 'aws-amplify-react'
import './App.css';
import Navbar from './components/navbar'
import CreateTodoFormContainer from './components/createTodoFormContainer';
import UpdateTodoFormContainer from './components/updateTodoFormContainer'
import Dashboard from './components/Dashboard'
import { Route, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar/>
      <div className="flex-container">
        <Router>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/create" component={CreateTodoFormContainer} />
            <Route exact path="/create/:id" component={UpdateTodoFormContainer} />
        </Router>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
