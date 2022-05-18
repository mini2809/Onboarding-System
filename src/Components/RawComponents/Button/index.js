import "./index.scss";
import {useDispatch} from "react-redux";

function Button(props){
	const dispatch = useDispatch();
	return (
		<div>
			<button className="button" onClick={()=>{dispatch(props.HandleClick());  }} disabled={props.disabled}>{props.label}</button> 
		</div>
	);
}

export default Button;
