import { Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Home from "./pages/Home"
import Signup from "./pages/SignUp/Signup"

import './App.css'

function App() {
 

  return (
    <>
    <div className="content-overlay" >
  <Header/>
    
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signupFarmer" element={<Signup/>} />
       </Routes>
    </div>
    </>
  )
}

export default App
