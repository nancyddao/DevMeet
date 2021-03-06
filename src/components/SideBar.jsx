import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

//Sidebar component that has all the links
class SideBar extends Component {
  constructor(props) {
    super(props)
  };

  render () {
    //onClick={renderProps.onClick} disabled={renderProps.disabled}
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div className='mainNavBar'>
        <ButtonGroup vertical className='buttonContainer'>
        <GoogleLogin
    clientId="208196216692-cgh2aeaov7v1uqv9h8g1fluafs1oltf3.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
          <Link to="/myevents">
            <Button
            >
              My Events
            </Button>
          </Link>
          <Link to="/trending">
            <Button
            >
              Trending
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    )
  }
}
export default SideBar;
