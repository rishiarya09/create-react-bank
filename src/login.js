import React, { Component } from 'react';
import {Layout, Content, Textfield, Button} from "react-mdl";
import Router from "react-router/HashRouter";
import axios from 'axios';
import lo from './logo_splash.png';
import {Redirect} from 'react-router-dom';
import UploadScreen from './UploadScreen';
import {Route} from 'react-router';

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
        var uploadScreen=[];
        uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
       self.setState({uploadScreen})
    }
      else if(response.data.responseCode === 'SEC003'){
        console.log("Username password do not match");
        alert("username password do not match")
        }
      else{
        console.log("Username does not exists");
        alert("Username does not exist");
        }
    })
      .catch(function (error) {
        console.log(error);
        });
 }

  
  render() {
    return (
    <div className="App">
      <Router>
        <Layout fixedHeader>
          <Content>
                 <br/>
                 <img src={lo} style={style}/>
                 <br/>
                 <Textfield label="Username" floatingLabel value = {this.state.username} style={{width: 'auto',display: 'block'}} onChange = {e => this.setState({username: e.target.value})} />
                  <br/>
                 <Textfield type="password" label="Password" floatingLabel value = {this.state.password} style={{width: 'auto',display: 'block',margin: '-3px'}} onChange = {e => this.setState({password: e.target.value})} />
                  <br/>
                  <Button raised accent ripple primary={true} style={style} onClick={(event) => this.handleClick(event)}>Login</Button>
          {this.state.uploadScreen}
          </Content>
        </Layout>
      </Router>
    </div>
    );
  }
}

const style = {flex: 1,
        flexDirection:'row'
};

export default login;






