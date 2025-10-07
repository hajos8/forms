import { Fragment, useState } from "react";

export default function Select(props){
    const [value, setValue] = useState("")

    const onSelected = e =>{
        setValue(e.target.value)
        props.onSelect(e.target.value)
    }

    return (
    <Fragment>
        <label htmlFor={props.id}>Select:</label>
        <select id={props.id} name={props.id} onChange={onSelected}>
            {value == "" ? <option>--- Choose ---</option> : ""}
            {Array.from(props.values.entries()).map(([key,value], idx) =>{
                return <option value={key} key={idx}>{value}</option>
            })}
        </select>
    </Fragment>
    )
}