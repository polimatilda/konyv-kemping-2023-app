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


function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <AuthProvider>
        <Container className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100 d-flex align-items-center flex-column">
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<LoggedinRoute><Login/></LoggedinRoute>} />
                <Route path="/signup" element={<LoggedinRoute><Signup/></LoggedinRoute>} />
                <Route path="/" element={<PrivateRoute><KempingMain/></PrivateRoute>}/>
                <Route path="/events" element={<PrivateRoute><Events/></PrivateRoute>}/>
                <Route path="/tbr" element={<PrivateRoute><TBR/></PrivateRoute>}/>
                <Route path="/profile" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
              </Routes>
            </BrowserRouter>
          </div>
        </Container>
      </AuthProvider>
    </div>
  );
}

export default App;
