import "./index.scss";
import Button  from "../RawComponents/Button";
import Input from "../RawComponents/Input";
import Titles from "../RawComponents/Titles";
function Page2(){
    return(
        <div>
            <Titles title="Let's setup a home for all your work" subtitle="You can always create another workspace later." />
            <div className="spaces"></div>
            <Input type="text" label="Workspace Name" placeholder="Eden" id="workspace-name"/>
            <Input  type="text" label="Workspace URL" placeholder="StarLink" id="workspace-url"/>
            <div className="spaces"></div>
            <Button label="Create Workspace" />
        </div>
    )
}
export default Page2;