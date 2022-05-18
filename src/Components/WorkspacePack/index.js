import "./index.scss";
import Button from "../RawComponents/Button";
import Titles from "../RawComponents/Titles";
import { Link } from "react-router-dom";
import myself from "../../public/Icons/myselfIcon.png";
import team from "../../public/Icons/teamIcon.png";
import Progress from "../RawComponents/Progress";
import { incrementcurrentstep } from "../../redux/WelcomeSlice";
import {useEffect, useState,useHistory} from "react";



function WorkspacePack() {
	let [optval , setoptval] = useState(0);
	const [ locationKeys, setLocationKeys ] = useState([])
	const history = useHistory()

	useEffect(() => {
		return history.listen(location => {
		  if (history.action === 'PUSH') {
			setLocationKeys([ location.key ])
		  }
	  
		  if (history.action === 'POP') {
			if (locationKeys[1] === location.key) {
			  setLocationKeys(([ _, ...keys ]) => keys)
	  
			  // Handle forward event
	  
			} else {
			  setLocationKeys((keys) => [ location.key, ...keys ])
	  
			  // Handle back event
	  
			}
		  }
		})
	  }, [ locationKeys, ])
	return (
		<div>
			<Progress value="3"/>
			<Titles
				title="How are you planning to use Eden"
				subtitle="We'll streamline your experience accordingly."
			/>

			<div>
				<button className="h-button " onClick={()=>setoptval(1)}>
					<img src={myself}  alt="myself icon" className="icon" />
					<div className="b-title"> For Myself</div>
					<div className="subtitle">
						Write Better.Think more clearly.Stay Organized
					</div>
				</button>
				<button className="h-button" onClick={()=>setoptval(2)}>
				<img src={team} className="icon" alt="team icon"/>
					<div className="b-title"> With my Team</div>
					<div className="subtitle">
						Wikis,docs,tasks & projects all in one place.
					</div>
				</button>
			</div>
			{
				optval != 0 ? <Link to="/success">
				<Button label="Create Workspace" HandleClick={incrementcurrentstep} disabled={false}/>
			</Link> : <Button label="Create Workspace" disabled={true}/>
			} 
			
		</div>
	);
}


export default WorkspacePack;
