import { AuthProvider } from "./contexts/AuthContext";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import LoggedinRoute from "./components/LoggedinRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/signup" element={<LoggedinRoute><Signup/></LoggedinRoute>} />
                <Route path="/login" element={<LoggedinRoute><Login/></LoggedinRoute>} />
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
