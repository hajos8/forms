import { Fragment } from "react"
export default function Radio(name,ids,values,labels){
    //TODO props
    //TODO state

    return(
        <div className="radio-group">
            {ids.map((id, idx) =>(
                <Fragment key={idx}>
                    <input type="radio" id={id} name={name} value={values[idx]}></input>
                    <label htmlFor={id}>{labels[idx]}</label>
                </Fragment>
            ))}
        </div>
    )
}