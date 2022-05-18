import './index.scss';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

function HandleProgress(val){
   let value= parseInt(val);
    console.log(value);
    let elements = document.getElementsByClassName('circle');
    let line_elements = document.getElementsByClassName('line');
    for(let i=1;i<value;i++){
        elements[i].classList.add('current_step');
        if(value !== 4){
            line_elements[i].classList.add('current_step');
        }
    }
}

function Progress(){
let current_step = useSelector((state)=>state.Welcome.currentStep);
useEffect(()=>{
    HandleProgress(current_step);
})
   return(
        <div className='progress-container'>
            <div className='circle current_step'  >1</div>
            <div className='line current_step'></div>
            <div className='circle'  >2</div>
            <div className='line'></div>
            <div className='circle' >3</div>
            <div className='line'></div>
            <div className='circle'  >4</div>
        </div>
    )
}


export default Progress;