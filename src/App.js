import React, { Component } from 'react';
import './App.css';
import Login from './login';
import mains from './mainscreen';

class App extends Component {
   constructor(props){
    super(props);
    this.state={
      loginPage:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Login parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.mainscreen}
        
      </div>
     
    );
  }
}

export default App;
