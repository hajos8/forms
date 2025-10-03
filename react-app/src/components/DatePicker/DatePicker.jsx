import { useState } from "react"

export default function DatePicker(props){
    const [date, setDate] = useState("")

    const onDatePicked = e =>{
        setDate(e.target.value)
        props.onDatePicked(e.target.value)
    }

    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.id} onChange={onDatePicked}/>
        </>
    )
}