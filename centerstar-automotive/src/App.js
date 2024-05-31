import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div>
       <Router>
           <NavigationBar/>
           <div className="flex flex-col">
               <div className="app-body bg-bg-back-color flex flex-row justify-center">
                   <Routes>
                       <Route path="/" element={<HomePage/>}/>
                       <Route path="/about-us/:key" element={<AboutPage/>}/>
                   </Routes>
               </div>
               <div className="app-end">
               </div>
           </div>
       </Router>
    </div>
  );
}
