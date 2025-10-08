/* App.jsx */

import React from "react";
import { Fragment } from "react";

import SimplePage from "./pages/SimplePage";
import AdvancedPage from "./pages/AdvancedPage";
import FileUploadPage from "./pages/FileUploadPage";
import LoginFormPage from "./pages/LoginFormPage";

import './App.css';

export default class App extends React.Component {
  state = {
    pageName: 'SimplePage',

    loggedInEmail: '',
  }

  handleLogin = email => {
    this.setState({ loggedInEmail: email })
  }

    render() {
        return (
            <div className="site-wrapper">
              <nav className="navbar">
                <div className="navbar-left">
                  <button 
                    className={"nav-btn" + (this.state.pageName=='SimplePage' ? " active" : "") }  
                    id="tabSimple" 
                    onClick={()=>this.setState({pageName: 'SimplePage'})}>
                      Simple
                  </button>
                  <button 
                    className={"nav-btn" + (this.state.pageName=='AdvancedPage' ? " active" : "") }  
                    id="tabAdvanced" 
                    onClick={()=>this.setState({pageName: 'AdvancedPage'})}>
                      Advanced
                  </button>
                  <button 
                    className={"nav-btn" + (this.state.pageName=='FileUploadPage' ? " active" : "") }  
                    id="tabFile" 
                    onClick={()=>this.setState({pageName: 'FileUploadPage'})}>
                      File upload
                  </button>
                </div>
                <div className="navbar-right">
                  {this.state.loggedInEmail && <p>Logged in as: {this.state.loggedInEmail}</p>}
                  {this.state.loggedInEmail ? 
                  <Fragment>
                    <button 
                      className={"nav-btn" + (this.state.pageName=='Logout' ? " active" : "") }  
                      id="tabLogout" 
                      onClick={()=>this.setState({loggedInEmail: ''})}>
                        Logout
                    </button>
                  </Fragment>
                  :
                  <Fragment>
                    <button 
                      className={"nav-btn" + (this.state.pageName=='LoginFormPage' ? " active" : "") }  
                      id="tabLogin" 
                      onClick={()=>this.setState({loggedInEmail: '', pageName: 'LoginFormPage'})}>
                        Login
                    </button>
                  </Fragment>
                  }
                </div>
              </nav>

              <div className="container">
                {this.state.pageName=='SimplePage' && <SimplePage />}
                {this.state.pageName=='AdvancedPage' && <AdvancedPage />}
                {this.state.pageName=='FileUploadPage' && <FileUploadPage />}
                {this.state.pageName=='LoginFormPage' && <LoginFormPage onLogin={this.handleLogin} loggedInEmail={this.state.loggedInEmail} />}
              </div>
            </div>
        )
    }
}