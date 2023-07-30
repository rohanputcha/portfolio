import React, { useState } from "react";
import "./EmailForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    body: "",
  });

  const [isInputFocused, setIsInputFocused] = useState({
    name: false,
    subject: false,
    body: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputFocus = (name) => {
    setIsInputFocused((prevIsInputFocused) => ({
      ...prevIsInputFocused,
      [name]: true,
    }));
  };

  const handleInputBlur = (name) => {
    setIsInputFocused((prevIsInputFocused) => ({
      ...prevIsInputFocused,
      [name]: false,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to handle the form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        className="contact-text-box"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onFocus={() => handleInputFocus("name")}
        onBlur={() => handleInputBlur("name")}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          style: { color: isInputFocused.name ? "gold" : "white" },
        }}
        InputProps={{
          style: { color: isInputFocused.name ? "gold" : "white" },
        }}
      />
      <TextField
        label="Subject"
        className="contact-text-box"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        onFocus={() => handleInputFocus("subject")}
        onBlur={() => handleInputBlur("subject")}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          style: { color: isInputFocused.subject ? "gold" : "white" },
        }}
        InputProps={{
          style: { color: isInputFocused.subject ? "gold" : "white" },
        }}
      />
      <TextField
        label="Body"
        className="contact-text-box"
        name="body"
        value={formData.body}
        onChange={handleChange}
        onFocus={() => handleInputFocus("body")}
        onBlur={() => handleInputBlur("body")}
        fullWidth
        margin="normal"
        variant="outlined"
        multiline
        rows={4}
        InputLabelProps={{
          style: { color: isInputFocused.body ? "gold" : "white" },
        }}
        InputProps={{
          style: { color: isInputFocused.body ? "gold" : "white" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="inherit"
        sx={{ color: "#333", backgroundColor: "gold" }}
      >
        Send
      </Button>
    </form>
  );
}

export default EmailForm;
