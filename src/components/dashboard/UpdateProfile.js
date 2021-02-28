import React, { useRef, useState } from "react";
import { Card, Form, Button, Body, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to Update the Account");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
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
                defaultValue={currentUser.email}
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
                placeholder="Leave blank to keep the same"
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
                placeholder="Enter Confirm password"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Update
            </button>
            <p>
              <Link to="/dashboard">Cancel?</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
