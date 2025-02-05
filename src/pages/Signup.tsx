import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
} from "@mui/material";

const Signup: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      signup(username, password); // Call the signup method
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
    } catch (err) {
      setError("Failed to create an account");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Signup
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && (
          <Alert severity="success">
            Account created successfully! Redirecting to login...
          </Alert>
        )}
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create
        </Button>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
