import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <Box sx={{
      textAlign: 'center',
      py: 8,
      px: 2,
      backgroundColor: 'primary.main', // Use accent color for CTA background
      color: 'primary.contrastText',
      borderRadius: 2,
      mx: { xs: 2, md: 4 },
      my: 8,
    }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
        Ready to Start Your Project?
      </Typography>
      <Typography variant="h6" component="p" sx={{ mb: 4 }}>
        Let's build something amazing together.
      </Typography>
      <Link href="/contact" passHref>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'primary.contrastText',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            },
            fontSize: '1.1rem',
            px: 4,
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Get in Touch
        </Button>
      </Link>
    </Box>
  );
};

export default CallToAction;
