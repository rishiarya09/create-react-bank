import axios from 'axios';
import Home from './Home';
import lo from './logo_splash.png';
import Match from "react-router/Match"
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Layout, Content, Textfield, Button, Header} from "react-mdl";


 class login extends Component {
   constructor(props){
        super(props);
        this.state={
                    username:'',
                    password:'',
                    main:[],
                    isloggedin : false
                    }
                  }

    handleClick(event){
      //event.preventDefault();
        var apiBaseUrl = "http://172.17.1.25:7070/FitPwappReceptor/rest/sig";
        var self = this;
        var config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer token',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    }
                  }
        var payload={
                      user:this.state.username,
                      password:this.state.password
                    }
            axios.post(apiBaseUrl, payload, config)
              .then(function (response) {
                console.log(response);
                console.log(response.data.responseCode);
              if(response.data.responseCode === '0'){
                    console.log("Login successfull");
                    const { token} = response.data;
                    localStorage.setItem('token',token);
                self.setState({
                          isloggedin : true,
                              })
                      }
                      else if(response.data.responseCode === 'SEC003'){
                          console.log("Username password do not match");
                            alert("username password do not match")
                            self.setState({
                              username : ' ',
                              password : ' '
                            })
                            }
                          else{
                            console.log("Username does not exists");
                            alert("Username does not exist");
                             self.setState({
                              username : ' ',
                              password : ' '
                            })
                            }
                        })
                          .catch(function (error) {
                            console.log(error);
                             self.setState({
                              username : ' ',
                              password : ' '
                            })
                            });
 }


  render() {
    return (
    <div className="App">
      <Router>
        <Layout fixedHeader>
        <Route path="/" render={() => ( <Header className="App-header" >
      <img src={lo} alt={this.props.img} className="img"/>          
                </Header>
                )}/>
          <Content>{
            this.state.isloggedin ? 
            <Next />
            :
        <div>
                 <br/>
                 <Textfield label="Username" floatingLabel value = {this.state.username} style={{width: 'auto',display: 'block'}} onChange = {e => this.setState({username: e.target.value})}/>
                  <br/>
                 <Textfield type="password" label="Password" floatingLabel value = {this.state.password} style={{width: 'auto',display: 'block',margin: '-3px'}} onChange = {e => this.setState({password: e.target.value})} /><br/>
                  <Button raised accent ripple primary={true}  onClick={(event) => this.handleClick(event)}>Login</Button>
        </div>  }
          </Content>
                
        </Layout>
      </Router>
    </div>
    );
  }
}

export default login;


class Next extends Component{
render(){
  return(
    <Router>
    <div>
    <Match exactly pattern='/Home' component={Home}/>
    </div>
    </Router>
    );
}
}



