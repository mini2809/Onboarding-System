import './App.css';
import Home from './Components/Home';
import Page2 from "./Components/Page2";
// import Page3 from "./Components/Page3";
import {Routes ,Route ,BrowserRouter } from "react-router-dom";
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route eaxct path="/" element={<Home/>} />
      <Route path="/page2" element={<Page2/>} />
      </Routes>
      </BrowserRouter>
     {/* <Route path="/page3" >
     <Page3 />
     </Route> */}
     {/* <Route path="/page4" >
     <Page4 />
     </Route> */}
     
    </div>
    
  );
}

export default App;
