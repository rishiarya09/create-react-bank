import React, { Component } from 'react';
import {Layout, Header, Content, Textfield, Button} from "react-mdl";
import Router from "react-router-dom/HashRouter";
import axios from 'axios';
import mainscreen from './mainscreen';
//import logo from './logo_fitcoop.png';
import lo from './logo_splash.png';
import {browserRouter, Route, Link} from 'react-router-dom';
import main from './mainscreen';

class login extends Component {
	constructor(props){
   
  super(props);
  this.state={
  username:'',
  password:'',
  mainscreen:[]
  }
 }
 handleClick(event){
   var flag = 0;
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
 if(response.data.responseCode == 0){
 console.log("Login successfull");
 this.props.history.push("/mainscreen");
 const { token} = response.data;
 localStorage.setItem('token',token);

}
 else if(response.data.code == 204){
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
 componentWillMount(){
    var main =[];
    main.push(<mainscreen appContext={this}/>);
    this.setState({
                  mainscreen:mainscreen
                    })
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
               <Textfield
             label="Username"
             floatingLabel
             value = {this.state.username}
              style={{width: 'auto',display: 'block'}}
             onChange = {e => this.setState({username: e.target.value})}
             />
           <br/>
             <Textfield
               type="password"
               label="Password"
               floatingLabel
               value = {this.state.password}
                style={{width: 'auto',display: 'block',margin: '-3px'}}
               onChange = {e => this.setState({password: e.target.value})}
               />
             <br/>
             <Button raised accent ripple primary={true} style={style} onClick={(event) => this.handleClick(event)}>Login</Button>
  
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





 git init
  157  git add README.md
  158  git commit -m "first commit"
  159  git remote add origin https://github.com/rishiarya09/app.git
  160  git push -u origin master
  161  git config --global user.email "rishiarya09@gmail.com"
  162  git config --global user.name "rishiarya"
  163  git remote add origin https://github.com/rishiarya09/app.git
  164  git push -u master
  165  git push -u /home/desarrollo/MyProjects/app master
  166  git push -u origin master
  167  git push -u /home/desarrollo/MyProjects/app app
  168  git add /home/desarrollo/MyProjects/app
  169  git commit -m "tutorial"
  170  git push
  171  git push --set-upstream origin master
  172  git push -u origin master
