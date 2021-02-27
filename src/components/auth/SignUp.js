import React, { useRef, useState } from "react";
import { Card, Form, Button, Body } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const { error, setError } = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    signup(emailRef.current.value, passwordRef.current.value);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="EmailLabel">Email</label>
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
            <div className="form-group">
              <label htmlFor="PasswordConfirmationLabel">
                Password Confirmation
              </label>
              <input
                type="password"
                className="form-control"
                ref={confirmPasswordRef}
                id="PasswordConfirmationLabel"
                required
                placeholder="Enter Confirm password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Launch modal
            </button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
