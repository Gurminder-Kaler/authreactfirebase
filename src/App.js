import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-50" style={{ maxwidth: "400px" }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
