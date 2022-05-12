import './index.scss';

function Button(props){
    return(
        <div>
            <button className="button">{props.label}</button>
        </div>
    )
}

export default Button;