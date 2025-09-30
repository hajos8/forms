import React, { Component, Fragment } from "react";

export default class InputField extends Component{
    state = {
        value: ""
    }

    setValue = function(value){
        console.log("setValue", value)

        this.props.onValueChange(value)

        this.setState({value})
    }

    render(){
        return(
            <Fragment>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input 
                type={this.props.type} 
                id={this.props.name} 
                name={this.props.name} 
                placeholder={this.props.placeholder}
                required 
                autoComplete="on" 
                onChange={e => this.setValue(e.target?.value)}
                />
            </Fragment>
        )
    }
}