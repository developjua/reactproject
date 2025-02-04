import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { Container, Box, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const RichTextEditor: React.FC = () => {

  const [content, setContent] = useState<string>("");
  const { hasUnsavedChanges, setHasUnsavedChanges, updateChartData } = useAuth();


  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

 
  const handleChange = (value: string) => {
    setContent(value);
    setHasUnsavedChanges(true);
    
  };

 
  const handleSave = () => {
    localStorage.setItem("richTextContent", content);
    alert("Content saved successfully!");
    setHasUnsavedChanges(false);
    updateChartData("editor");
  };

  
  const handleClear = () => {
    setContent("");
    localStorage.removeItem("richTextContent");
    alert("Content cleared!");
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Rich Text Editor
        </Typography>
        <ReactQuill
          theme="snow" 
          value={content}
          onChange={handleChange}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }], 
              ["bold", "italic", "underline", "strike"], 
              [{ list: "ordered" }, { list: "bullet" }], 
              ["link", "image"], 
              ["clean"], 
            ],
          }}
          formats={[
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "link",
            "image",
          ]}
          placeholder="Write something amazing..."
          sx={{
            ".ql-container": {
              border: "1px solid #ccc",
              borderRadius: "30px",
              mt: 4,
            },
            ".ql-editor": {
              minHeight: "500px",
              fontSize: "16px",
            },
          }}
        />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ mr: 2 }}
          >
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RichTextEditor;
