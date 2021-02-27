import React, { useState } from "react";
import { Card, CardBody, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout(e) {
    setError("");
    try {
      e.preventDefault();
      history.push("/login");
      await logout();
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h3>Profile</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>Your Email : {currentUser && currentUser.email}</p>
          <Link to="update-profile"> Update Profile</Link>
        </Card.Body>
      </Card>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}

export default Dashboard;
