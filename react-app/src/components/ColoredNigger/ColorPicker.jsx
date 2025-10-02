import { useEffect, useState } from "react"

export default function ColorPicker(props){
    const [state, SetState] = useState({
        color: '#263159'
    })

    const handleColorPick = e =>{
        props.onColorPick(e.target?.value)
        SetState({color: e.target?.value})
    }

    useEffect( ()=>{}, [state])

    return(
        <>
            <label htmlFor="adv-color">Color picker:</label>
            <input type="color" id="adv-color" name="adv-color" value={state.color} onChange={handleColorPick} />
        </>
    )
}