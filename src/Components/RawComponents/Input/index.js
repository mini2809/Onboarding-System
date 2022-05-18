import "./index.scss";
import {useDispatch} from "react-redux";

function Input(props){
    const dispatch = useDispatch();
    return(
        <div className="input-container">
            <label className="label">{props.label}</label>
            <input type={props.type} className="input-field"  placeholder={props.placeholder} id={props.id} value={props.field } onChange={(e)=>{
                dispatch(props.ChangeHandle(e.target.value));
                props.HandleValidation();
            }}  />
        </div>
    )
}

export default Input;