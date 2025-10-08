import React from "react";
import { Fragment } from "react";

export default class LoginFormPage extends React.Component {
  state = {
    loginEmail: '',
    loginPassword: '',

    loggedIn: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    
    if(this.state.loginPassword.length < 8){
      console.log('Password length must be at least 8 characters')
      return 'Password length must be at least 8 characters'
    }

    //send to backend 

    fetch("http://localhost:3333/login", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({loginEmail: this.state.loginEmail, loginPassword: this.state.loginPassword}),
    })
    .then( res => {
      if(res.ok) {
        this.setState({ loggedIn: true })
      }

    })
    .catch(console.error)
    .finally(() => {})
  }

  render() {
    return (
      <div id="content-login" className="tab-content active">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="loginEmail">Email:</label>
          <input type="email" id="loginEmail" name="loginEmail" autoComplete="username" required onChange={this.handleChange}/>
          <label htmlFor="loginPassword">Password:</label>
          <input type="password" id="loginPassword" name="loginPassword" autoComplete="current-password" required onChange={this.handleChange}/>
          <button type="submit">Login</button>
        </form>
        <hr style={{ margin: "24px 0" }} />
        <div className="social-login">
          <button type="button" className="social-btn google-login">Login with Google</button>
          <button type="button" className="social-btn salesforce-login">Login with Salesforce</button>
          <button type="button" className="social-btn facebook-login">Login with Facebook</button>
        </div>
        <hr style={{ margin: "24px 0" }} />
        { this.state.loggedIn && <p>{this.state.loginEmail} is logged in</p> }
      </div>
    );
  }

}
