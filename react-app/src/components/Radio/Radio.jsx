import { Fragment, useState } from "react"
export default function Radio({name,ids,values,labels}){
    const [choice, setChoice] = useState('adv-radio1')

    const handleRadioChange = e =>{
        setChoice(e.id)
    }

    return(
        <div className="radio-group">
            {ids.map((id, idx) =>(
                <Fragment key={idx}>
                    <input type="radio" id={id} name={name} value={values[idx]} onChange={() => handleRadioChange({id})}></input>
                    <label htmlFor={id}>{labels[idx]}</label>
                </Fragment>
            ))}
        </div>
    )
}