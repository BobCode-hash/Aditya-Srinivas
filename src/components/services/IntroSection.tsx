import React from 'react';
import { Box, Typography } from '@mui/material';

const IntroSection = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8, px: 2 }}>
      <Typography variant="h2" component="h1" sx={{
        fontSize: { xs: '2.5rem', md: '4rem' },
        fontWeight: 700,
        mb: 2,
        color: 'primary.main' // Assuming primary.main is your bold accent color
      }}>
        My Services
      </Typography>
      <Typography variant="h6" component="p" sx={{
        fontSize: { xs: '1rem', md: '1.25rem' },
        maxWidth: '800px',
        mx: 'auto',
        color: 'text.secondary'
      }}>
        As a dedicated front-end developer, I specialize in crafting high-performance, scalable, and user-friendly web applications. My expertise lies in leveraging modern technologies like Next.js and integrating robust content management systems such as Sanity CMS to deliver exceptional digital experiences.
      </Typography>
    </Box>
  );
};

export default IntroSection;
