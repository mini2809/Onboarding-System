import "./index.scss";
import Button  from "../RawComponents/Button";
import Input from "../RawComponents/Input";
import Titles from "../RawComponents/Titles";
import { Link } from "react-router-dom";
import Progress from "../RawComponents/Progress";
import {useSelector} from "react-redux";
import { incrementcurrentstep } from "../../redux/WelcomeSlice";
import {addWName,addWUrl} from "../../redux/WorkspacedetailSlice";

let validwName= false;
let validwUrl= false;
function AddWorkspaceDetails(){
    let wname =  useSelector((state)=> state.Workspacedetails.wName);
    let wurlname = useSelector((state)=> state.Workspacedetails.wurl);
    return(
        <div>
            <Progress value="2"/>
            <Titles title="Let's setup a home for all your work" subtitle="You can always create another workspace later." />
            <Input type="text" label="Workspace Name" placeholder="Eden" id="workspace-name" ChangeHandle={addWName} HandleValidation={HandlevalidationWorkspaceName} field={wname} />
            <Input  type="text" label={"Workspace URL" + "(optional)"} placeholder="StarLink" id="workspace-url" ChangeHandle={addWUrl} HandleValidation={HandleValidationWorkspaceUrl} field={wurlname} />
            {
                (validwName && validwUrl ?
                  ( <Link to="/workspacepack" >
                  <Button label="Create Workspace" HandleClick={incrementcurrentstep}  disabled={false} />
                  </Link>)  : <><Button label="Create Workspace" disabled={true}/></>)
            }
        </div>
    )
}
function HandlevalidationWorkspaceName(){
    let wName=document.getElementById("workspace-name");
    let validwname = /^[a-zA-Z]+$/.test(wName.value) && (wName.value.length !== 0);
    if(!validwname){
        wName.classList.add("error");
        validwName = false;
    }
   else{
        wName.classList.remove("error");
        validwName= true;
    }
}

function HandleValidationWorkspaceUrl(){
    let url= document.getElementById("workspace-url");
    
    let validurl = /((http|https):\/\/)(www.)?([a-zA-Z0-9]+)\.([a-z]+)$/.test(url.value);

    if(!validurl){
        url.classList.add("error");
        validwUrl = false;
    }
    else{
        url.classList.remove("error");
        validwUrl = true;
    }
}
export default AddWorkspaceDetails;