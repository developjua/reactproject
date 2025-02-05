import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Container, Box, Typography, Button, Snackbar } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const { hasUnsavedChanges, setHasUnsavedChanges, updateChartData } =
    useAuth();
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedContent = localStorage.getItem("richTextContent");
      if (savedContent) {
        setContent(savedContent);
      }
    }
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("richTextContent", content);
      setOpenSnackbar(true); // Show Snackbar when content is saved
      setHasUnsavedChanges(false);
      updateChartData("editor");
    }
  };

  const handleClear = () => {
    setContent("");
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("richTextContent");
    }
    setOpenSnackbar(true); // Show Snackbar when content is cleared
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
          ref={quillRef}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3] }],
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
              padding: "16px",
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

        
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message={content ? "Content saved!" : "Content cleared!"}
        />
      </Box>
    </Container>
  );
};

export default RichTextEditor;

