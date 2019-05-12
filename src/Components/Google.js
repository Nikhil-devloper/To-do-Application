import React from 'react';
import { connect } from 'react-redux';
import './Google.css';
import {signIn, signOut} from '../Action/index.js';

class Google extends React.Component {

  state = { isSignedIn: false}

  clickMe=() => {

  }

  SignIn=() => {

    this.auth.signIn()
  }

  SignOut=()=> {

    this.auth.signOut()
  }

  renderAuthButton=() => {
      if(this.state.isSignedIn===false)
        return(
            <button className="btn" onClick={this.SignIn}>
              <i className="fa fa-google"></i>
                Log In
            </button>

      );
      else {
        return(
          <button className="btn" onClick={this.SignOut}>
              <i className="fa fa-google"></i>
                  Log out
          </button>
        )
      }

  }

  render()
  {
    return (
        <div className="btnContainer"> {this.renderAuthButton()} </div>
    );
  }

  componentDidMount() {

    window.gapi.load('client: auth2',() => {
      window.gapi.client.init({
        clientId: '938753269295-h0g180iin8pkt5q1rqmjo0v9e76geiip.apps.googleusercontent.com',
        scope: 'email profile openid'
      }).then(() => {
        this.auth= window.gapi.auth2.getAuthInstance();

        //this.props.signIn(this.auth.currentUser.get().getId());
        this.auth.isSignedIn.listen(this.onAuthChange);

            this.setState({ isSignedIn: this.auth.isSignedIn.get()})


            if(this.auth.isSignedIn.get()) {
                this.props.signIn(this.auth.currentUser.get().getId(),this.auth.currentUser.get().w3.ofa)
            }
            else {
                this.props.signOut()
            }
      })
    });
  }

  onAuthChange=() => {

    this.setState({ isSignedIn: this.auth.isSignedIn.get()})

    if(this.auth.isSignedIn.get()) {
        this.props.signIn(this.auth.currentUser.get().getId(),this.auth.currentUser.get().w3.ofa)
    }
    else {
        this.props.signOut()
    }
  }
}
const mapStateToProps=(state) => {
  
    return state;
}

export default connect(mapStateToProps,{signIn,signOut})(Google);
