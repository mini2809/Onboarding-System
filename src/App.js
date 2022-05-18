import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./Components/Welcome";
import AddWorkspaceDetails from "./Components/AddWorkspaceDetails";
import WorkspacePack from "./Components/WorkspacePack";
import Success from "./Components/Success";
import logo from "./public/Icons/logo.png";

function App() {
	return (
		<div className="App">
			<div className="logo-desc-img">
				<img src={logo} alt="logo-image" className="logo-img"/>
			<p className="Logo">Eden</p>
			</div>
			<BrowserRouter>
				<Routes>
					<Route eaxct path="/" element={<Welcome />} />
					<Route path="/addworkspacedetails" element={<AddWorkspaceDetails/>} />
					<Route path="/workspacepack" element={<WorkspacePack />} />
					<Route path="/success" element={<Success />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
