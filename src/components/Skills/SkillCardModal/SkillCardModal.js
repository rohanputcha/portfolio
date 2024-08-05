import React, { useState } from "react";
import "./SkillCardModal.css";
import SkillCard from "../SkillCard/SkillCard";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SkillCardModal({ skill, type, title, description }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    window.gtag("event", "open_modal", {
      event_category: "User Interaction",
      event_label: this.skill,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSkillCardClick = () => {
    // Perform any logic here before opening the modal (if needed)
    handleOpen();
  };

  const full_description = Array.isArray(description) ? (
    <ul>
      {description.map((point) => (
        <li key={point}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {point}
          </Typography>
        </li>
      ))}
    </ul>
  ) : (
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {description}
    </Typography>
  );

  return (
    <div className="skill-card-modal-div">
      <SkillCard
        skill={skill}
        type={type}
        onClick={handleSkillCardClick} // Pass the onClick handler to SkillCard
      />
      <Modal
        className="modal-items"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#333",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid gray",
          }}
        >
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {title}
          </Typography>
          {full_description}
        </Box>
      </Modal>
    </div>
  );
}

export default SkillCardModal;
