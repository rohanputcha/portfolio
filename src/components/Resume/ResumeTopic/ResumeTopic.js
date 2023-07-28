import React from 'react';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent } from '@mui/lab';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Typography from '@mui/material/Typography';
import './ResumeTopic.css';

function ResumeTopic({ title }) {
  const iconMap = {
    Education: <MenuBookIcon />,
    "Work Experience": <WorkIcon />,
  };

  const icon = iconMap[title] || <QuestionMarkIcon />; // default is '?'
  
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot>
          {icon}
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h2" id="resume-topic">
          {title}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default ResumeTopic;