import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";

const UserDataForm: React.FC = () => {
  const { hasUnsavedChanges, setHasUnsavedChanges, updateChartData } = useAuth();
  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });


 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setHasUnsavedChanges(true);
  };

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  
    const userId = `user_${Math.random().toString(36).substr(2, 9)}`;

    
    const userData = { ...formData, userId };
    localStorage.setItem("userData", JSON.stringify(userData));

   
    setHasUnsavedChanges(false);
    updateChartData("form"); 
    /
    alert("Data saved successfully!");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          User Data Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </form>
      </Box>

   
    </Container>
  );
};

export default UserDataForm;