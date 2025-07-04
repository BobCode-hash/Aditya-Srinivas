import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import Image from 'next/image';

const skills = [
  { name: "Next.js", icon: <Image src="/next.svg" alt="Next.js" width={40} height={40} /> },
  { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: "Sanity CMS", icon: <Image src="/Sanity.svg" alt="Sanity CMS" width={40} height={40} /> },
  { name: "Tailwind CSS", icon: <Image src="/Tailwind CSS.svg" alt="Tailwind CSS" width={40} height={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
  { name: "Figma", icon: <FaFigma size={40} color="#F24E1E" /> },
];

const TechnicalSkills = () => {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
        Technical Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box sx={{
              textAlign: 'center',
              p: 2,
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 1,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}>
              <Box sx={{ mb: 1 }}>
                {skill.icon}
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnicalSkills;
