import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {Layout, Navigation, Header, Content, Drawer} from 'react-mdl';
import './App.css';
import lo from './logo_splash.png';
import Home from './Home';


class ModalSwitch extends React.Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return (
     
     <div>
       <Switch location={isModal ? this.previousLocation : location}>
          <First/>
          <Route pattern="/rev" component={ModalSwitch}/>
          //<Route pattern="/Home" component={Home}/>
          </Switch>
          </div>
    )
  }
}



const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
)

export default ModalGallery

class First extends React.Component{
  render(){
    return(
 <Router>
      <div>
      <Layout fixedHeader>
      <Header className="App-header">
      <img src={lo} alt={this.props.img} className="img"/>
      </Header>
     
      <Drawer>
      <Navigation className="hide-on-sm">
<a href="/rev">Revision de tareas </a>
<a href="/Home">Ingreso de tareas</a>
<a to="/sup">Supervision de tareas</a> 
      </Navigation>
      </Drawer>
      <Content>
      <div>
      </div>
      </Content>   
          </Layout>
          
      </div>
      </Router>
      );
  }
}
