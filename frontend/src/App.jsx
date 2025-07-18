import { Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Home from "./pages/Home"
import Signup from "./pages/SignUp/Signup"

import './App.css'
import Footer from "./component/Footer"

function App() {
 

  return (
    <>
    <div className="content-overlay" >
  <Header/>
    
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signupFarmer" element={<Signup/>} />
       </Routes>
       <hr className="text-green-50" />
       <Footer/>
    </div>
    </>
  )
}

export default App
