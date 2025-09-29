import React, { Component, Fragment } from "react";

export default class EmailInput extends Component{
    state = {
        email: ""
    }

    setEmail = function(email){
        console.log("setEmail", email)

        this.props.onEmailChange(email)

        this.setState({email})
    }


    handleEmailBlur = e =>{
        console.log("handleEmailBlur", e)
    }

    render(){
        return(
            <Fragment>
                <label htmlFor="simpleEmail">Email address:</label>
                <input type="email" id="simpleEmail" name="simpleEmail" 
                    placeholder="name@example.com" required autoComplete="on" 
                    onChange={e => this.setEmail(e.target?.value)}
                    onBlur={this.handleEmailBlur}/>
            </Fragment>
        )
    }
}