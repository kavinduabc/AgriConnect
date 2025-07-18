import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Signup from "./pages/SignUp/Signup";
import Footer from "./component/Footer";
import FarmerPortal from "./pages/portals/FarmerPortal";

import './App.css';

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === "/farmer";

  return (
    <>
      <div className="content-overlay">
        {!hideHeader && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signupFarmer" element={<Signup />} />
          <Route path="/farmer" element={<FarmerPortal />} />
        </Routes>

        <hr className="text-green-50" />
        <Footer />
      </div>
    </>
  );
}

export default App;
