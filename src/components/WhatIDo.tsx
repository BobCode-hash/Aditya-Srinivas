'use client';

import { Box, Grid, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'User Experience (UX)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
    highlighted: true,
  },
  {
    title: 'User Interface (UI)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
  },
];

export default function WhatIDo() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* LEFT TEXT */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            What I do?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'primary.main',
              borderRadius: 2,
              px: 4,
              py: 1,
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Say Hello!
          </Button>
        </Grid>

        {/* RIGHT CARDS */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            {services.map((service, idx) => (
              <Grid item xs={12} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderLeft: service.highlighted ? '4px solid primary.main' : '4px solid transparent',
                      borderRadius: 2,
                      backgroundColor: 'background.paper',
                      transition: '0.3s',
                      '&:hover': {
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
