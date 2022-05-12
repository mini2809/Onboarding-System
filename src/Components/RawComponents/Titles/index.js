import './index.scss';

function Titles(props){
    return(
        <div className='container'>
            <div className='title'>{props.title}</div>
            <div className='subtitle'>{props.subtitle}</div>
        </div>
    )
}
export default Titles;