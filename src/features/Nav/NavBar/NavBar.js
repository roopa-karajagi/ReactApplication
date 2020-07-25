import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link , withRouter } from "react-router-dom";
import { SignedIn } from "../StartMenu/SignedIn";
import { SignedOut } from "../StartMenu/SignedOut";

class NavBar extends Component {
  state={
    authenticate:false
  }
    
   handleSignedIn = ()=>{
    this.setState({
      authenticate:true
    })
  }
  handleSignedOut=()=>{
    this.setState({
      authenticate:false
    });
    this.props.history.push("/");
  }
  render() {
   const  {authenticate} = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticate ? <SignedIn signedOut={this.handleSignedOut}/> : <SignedOut signedIn={this.handleSignedIn}/>}
         </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);

//Adding Routing Functionalities to components so that we can use history as props to link
//highOrder Components --takes one component as one parameter and returns new component with extra power where the routing properties will be available