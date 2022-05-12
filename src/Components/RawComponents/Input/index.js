import "./index.scss";
import {useState} from "react";

function Input(props){
    const [input,setInput] = useState("");
    return(
        <div className="input-container">
            <label className="label">{props.label}</label>
            <input className="input-field" placeholder={props.placeholder} id={props.id} value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
    )
}

export default Input;