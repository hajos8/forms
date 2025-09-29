/* SimplePage.jsx */
import React from "react";
import EmailInput from "../components/email_input/EmailInput";
export default class SimplePage extends React.Component {

    handleFormSubmit = e =>{
        e.preventDefault()
        console.log("email", this.state.email)
    }

    render() {
        return (
            <div id="content-simple" className="tab-content active">
            <h2>Simple Email Form</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <EmailInput/>
                    <button type="submit">Submit</button>
                    <input type="reset" value={"Reset"}/>
                </form>
            </div>
        )
    }
}