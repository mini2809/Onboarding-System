import Button from "../RawComponents/Button/index";
import Titles from "../RawComponents/Titles";
import Input from "../RawComponents/Input";
import Progress from "../RawComponents/Progress";
import "./index.scss";

import {useSelector} from "react-redux";
import { addFullName,addDisplayName,incrementcurrentstep } from "../../redux/WelcomeSlice";
import { Link } from "react-router-dom";

let validfname= false;
let validdname = false;

function Welcome(){
    let steps=useSelector((state)=>state.Welcome.steps)
    const fullname =  useSelector((state)=> state.Welcome.fullName);
    const displayname = useSelector((state)=> state.Welcome.displayName);
    return(
        <div>
            <Progress value="1"/>
            <Titles title="Welcome! First things first..." subtitle="You can always change them later." />
            <Input type="text" label="Full Name" placeholder="Steve Jobs" id="full-name"  ChangeHandle={addFullName} HandleValidation={HandlevalidationFullName} field={fullname} />
            <Input  type="text" label="Display Name" placeholder="StarLink" id="user-name"  ChangeHandle={addDisplayName}  HandleValidation={HandleValidationDisplayName} field={displayname}/>
            {
                (validfname && validdname ?
                  ( <Link to="/addworkspacedetails" >
                  <Button label="Create Workspace" HandleClick={incrementcurrentstep} disbaled={false} />
                  </Link>)  : <><Button label="Create Workspace"  disabled={true}/></>)
            }
           
          </div>
    )
}
function HandlevalidationFullName(){
    let fullName=document.getElementById("full-name");
    let validfullname = (/^[a-zA-Z]+$/.test(fullName.value)) && (fullName.value.length !== 0);
    if(!validfullname ){
        fullName.classList.add("error");
        validfname = false;
    }
    else{
        fullName.classList.remove("error");
        validfname= true;
    }
}

function HandleValidationDisplayName(){
    let displayName = document.getElementById("user-name");
    
    let validdisplayName =( /^[a-zA-Z]+$/.test( displayName.value)) && (displayName.value.length !== 0) ;
    if(!validdisplayName){
        displayName.classList.add("error");
        validdname = false;
    }
    else{
        displayName.classList.remove("error");
        validdname = true;
    }
}

export default Welcome;