import React from "react";

export default class LoginFormPage extends React.Component {
  state = {
    loginEmail: '',
    loginPassword: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', this.state);
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
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('email updated:', this.state.loginEmail);
  }
}
