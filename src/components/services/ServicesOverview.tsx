import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { FaReact, FaServer, FaWordpressSimple } from 'react-icons/fa'; // Example icons

const services = [
  {
    icon: <FaReact size={40} color="primary.main" />,
    title: "Next.js Development",
    description: "Building lightning-fast, SEO-friendly, and scalable web applications with Next.js for optimal performance and user experience.",
  },
  {
    icon: <FaServer size={40} color="primary.main" />,
    title: "Sanity CMS Integration",
    description: "Seamlessly integrating Sanity CMS to provide a flexible, powerful, and intuitive content management experience for your digital products.",
  },
  {
    icon: <FaWordpressSimple size={40} color="primary.main" />,
    title: "Custom Site Builders",
    description: "Crafting bespoke site builders tailored to your unique business needs, empowering you with full control over your content and design.",
  },
];

const ServicesOverview = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: 'background.paper' }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
        What I Offer
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3,
              boxShadow: 3,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesOverview;
