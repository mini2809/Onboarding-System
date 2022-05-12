import Button from "../RawComponents/Button/index";
import Titles from "../RawComponents/Titles";
import Input from "../RawComponents/Input";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
function Home(){
    return(
        <div>
            <Titles title="Welcome! First things first..." subtitle="You can always change them later." />
            <div className="spaces"></div>
            <Input type="text" label="Full Name" placeholder="Steve Jobs" id="full-name"/>
            <Input  type="text" label="Display Name" placeholder="StarLink" id="user-name"/>
            <div className="spaces"></div>
            <Link to="/Page2">
            <Button label="Create Workspace" />
            </Link>
        </div>
    )
}

export default Home;