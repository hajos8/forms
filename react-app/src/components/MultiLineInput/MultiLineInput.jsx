import { Fragment, useState } from "react";

export default function MultiLineInput(props){
    const [value, setValue] = useState("")

    const inputEvent = e =>{
        setValue(e.target.value)
        props.onMultiLineInputChange(e.target.value)
    }

    return(
        <Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea id={props.id} name={props.id} placeholder={props.placeholder} onChange={inputEvent} value={value}></textarea>
        </Fragment>
    )
}