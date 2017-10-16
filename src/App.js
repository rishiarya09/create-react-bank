import React, { Component } from 'react';
import './App.css';
import Login from './login';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import UploadScreen from './UploadScreen';
import home from './Home';
const customHistory = createBrowserHistory()


class App extends Component {

  render() {
    return (
    <Router history={customHistory}>
      <div>
      <Switch>
        <Route exact={true} path="/" component={Login}/>
        <Route path="/UploadScreen" component={UploadScreen}/>
        //<Route path="/home" component={home}/>
     </Switch>
     </div>
     </Router>
    );
  }
}

export default App;
