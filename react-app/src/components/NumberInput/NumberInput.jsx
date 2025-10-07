import { Fragment, useState } from "react";

export default function NumberInput(props){
    const [num, setNum] = useState(props.defaultNumber)
    const [minValue, setMinValue] = useState(+props.min)
    const [maxValue, setMaxValue] = useState(+props.max)

    const onNumberChange = e =>{
        let value = +e.target.value

        if(value < minValue) value = minValue
        if(maxValue < value) value = maxValue

        setNum(value)
        props.onNumberChange(value)
    }

    return(
        <Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" id={props.id} name={props.id} value={num == undefined ? props.defaultNumber : num} onChange={onNumberChange}/>
        </Fragment>
    )
}