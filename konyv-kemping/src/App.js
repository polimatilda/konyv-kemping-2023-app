import { AuthProvider } from "./contexts/AuthContext";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
              </Routes>
            </BrowserRouter>
          </div>
        </Container>
      </AuthProvider>
    </div>
  );
}

export default App;
