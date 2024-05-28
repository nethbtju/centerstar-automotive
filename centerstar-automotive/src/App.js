import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <div>
       <Router>
           <NavigationBar/>
           <div className="app-body bg-bg-back-color flex flex-row justify-center">
               <Routes>
                   <Route path="/" element={<HomePage/>}/>
               </Routes>
           </div>
       </Router>
    </div>
  );
}
