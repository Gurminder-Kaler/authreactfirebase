import React, { useRef, useState } from "react";
import { Card, Form, Button, Body, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("User/Credentials Do not match our records!");
      setLoading(false);
    }
  }
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {/* {currentUser && (
          <Alert variant="danger">Logged in as "{currentUser.email}"</Alert>
        )} */}
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="EmailLabel">Email </label>
            <input
              type="email"
              className="form-control"
              ref={emailRef}
              id="EmailLabel"
              required
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="PasswordLabel">Password</label>
            <input
              type="password"
              className="form-control"
              ref={passwordRef}
              id="PasswordLabel"
              required
              placeholder="Enter Password"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Sign In
          </button>
          <p>
            Do not have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignIn;
