import { Fragment, useState } from "react";

export default function Range(props){
    const [value, setValue] = useState(+props.defaultValue)

    const onRangeChange = e =>{
        setValue(e.target.value)
        props.onSlideChange(e.target.value)
    }

    return(
        <Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="range" id={props.id} name={props.id} min={props.min} max={props.max} step="1" value={value} onChange={onRangeChange} />
            <span id="rangeValue" style={{minWidth:'32px'}}>{value}</span>
        </Fragment>
    )

}