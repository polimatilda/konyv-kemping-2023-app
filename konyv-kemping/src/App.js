import { AuthProvider } from "./contexts/AuthContext";
import { Container } from "react-bootstrap";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import LoggedinRoute from "./components/LoggedinRoute";
import './App.css'
import NavbarComp from "./components/NavbarComp";
import KempingMain from "./pages/KempingMain";
import Events from "./pages/Events";
import TBR from "./pages/TBR";
import Help from "./pages/Help";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ScrollToTopBtn from "./components/ScrollToTopBtn";


function App() {

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    <div className="App position-relative">
      <AuthProvider>
        <BrowserRouter>
          <NavbarComp />
          <Container className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100 d-flex align-items-center flex-column">
              <Routes>
                <Route path="/login" element={<LoggedinRoute><Login /></LoggedinRoute>} />
                <Route path="/signup" element={<LoggedinRoute><Signup /></LoggedinRoute>} />
                <Route path="/" element={<KempingMain />} />
                <Route path="/events" element={<Events />} />
                <Route path="/tbr" element={<PrivateRoute><TBR /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                <Route path="/help" element={<Help />} />
              </Routes>
            </div>
          </Container>
          <Footer />
          {showButton && <ScrollToTopBtn />}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
