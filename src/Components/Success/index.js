import "./index.scss";
import Button  from "../RawComponents/Button";
import Titles from "../RawComponents/Titles";
import Progress from "../RawComponents/Progress";
import done from "../../public/Icons/DoneIcon.png";

function Success(){
    return(
        <div>
            <Progress value="4"/>
            <img src={done} alt="done" className="done-icon"/>
            <Titles title="Congratulations, Eren!" subtitle="You have completed onboarding,you can start using Eren." />
            <Button label="Launch Eden" />
        </div>
    )
}
export default Success;
