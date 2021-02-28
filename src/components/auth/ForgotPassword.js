import React, { useRef, useState } from "react";
import { Card, Form, Button, Body, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function ForgotPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { resetpassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetpassword(emailRef.current.value);
      //   history.push("/dashboard");
      setMessage(`check your {$emailRef.current.value} for further`);
    } catch {
      setError("Email does not match our records!");
      setLoading(false);
    }
  }
  return (
    <Card>
      <Card.Body>
        <h5 className="text-center mb-4">Forgot Password | Enter Email </h5>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="info">{message}</Alert>}
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
          <button
            disabled={loading}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Reset Password
          </button>
          <p>
            Do not have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ForgotPassword;
