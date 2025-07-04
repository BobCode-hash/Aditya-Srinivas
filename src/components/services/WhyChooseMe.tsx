import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { FaRocket, FaSearchDollar, FaExpandAlt, FaHeadset } from 'react-icons/fa'; // Example icons

const benefits = [
  {
    icon: <FaRocket size={30} color="primary.main" />,
    title: "Performance Optimization",
    description: "Delivering blazing-fast websites that load quickly and provide a smooth user experience.",
  },
  {
    icon: <FaSearchDollar size={30} color="primary.main" />,
    title: "SEO-Friendly Development",
    description: "Building sites with search engine optimization in mind to ensure maximum visibility and organic traffic.",
  },
  {
    icon: <FaExpandAlt size={30} color="primary.main" />,
    title: "Scalable Architecture",
    description: "Designing and implementing robust architectures that can grow with your business needs.",
  },
  {
    icon: <FaHeadset size={30} color="primary.main" />,
    title: "Dedicated Client Support",
    description: "Providing ongoing support and maintenance to ensure your digital presence remains top-notch.",
  },
];

const WhyChooseMe = () => {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
        Why Choose Me?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{
              textAlign: 'center',
              p: 3,
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 1,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}>
              <Box sx={{ mb: 2 }}>
                {benefit.icon}
              </Box>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                {benefit.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseMe;
