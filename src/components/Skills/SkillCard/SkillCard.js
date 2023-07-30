// SkillCard .js

// import React, { useState } from "react";
import "./SkillCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function SkillCard({ skill, type, onClick }) {
  //   const [isHovered, setIsHovered] = useState(false);
  //   const handleMouseEnter = () => {
  //     setIsHovered(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };

  //   const variant = isHovered ? "elevation" : "outlined";

  return (
    <div>
      <Card
        // onClick={onClick}
        className="skill-card"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        sx={{
          maxWidth: 300,
          backgroundColor: "#333",
          //   border: isHovered ? "1px solid gray" : "0px",
          mb: 1.5,
          mt: 1.5,
          //   cursor: isHovered ? "pointer" : "default",
        }}
        // variant={variant}
      >
        <CardContent>
          <Typography variant="h5" component="div" color="gold">
            {skill}
          </Typography>
          <Typography color="#fff">{type}</Typography>
        </CardContent>
        <CardActions>
          <Button
            className="hoverGold"
            size="small"
            sx={{ color: "white" }}
            onClick={onClick} // remove if Card has onClick
          >
            See More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SkillCard;
