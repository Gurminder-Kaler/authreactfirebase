import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import UpdateProfile from "./components/dashboard/UpdateProfile";
import ForgotPassword from "./components/auth/ForgotPassword";
import Dashboard from "./components/dashboard/Dashboard";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-50" style={{ maxwidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/" exact component={SignIn} />
              <Route path="/forgot-password" exact component={ForgotPassword} />
              <Route path="/update-profile" exact component={UpdateProfile} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
