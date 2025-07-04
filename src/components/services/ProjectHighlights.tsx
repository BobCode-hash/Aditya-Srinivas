import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

// Placeholder for project data - in a real app, this would come from Sanity CMS
const projects = [
  {
    name: "E-commerce Platform",
    description: "A high-performance e-commerce solution built with Next.js, integrated with Stripe for payments and Sanity CMS for product management.",
    technologies: ["Next.js", "React", "Sanity CMS", "Stripe", "Tailwind CSS"],
    imageUrl: "/banner-images/build.jpg", // Example image path
    demoLink: "#",
  },
  {
    name: "Blog & Portfolio Site",
    description: "A personal blog and portfolio showcasing various projects, featuring dynamic content fetched from Sanity CMS and optimized with Next.js SSG.",
    technologies: ["Next.js", "React", "Sanity CMS", "GraphQL"],
    imageUrl: "/banner-images/design.jpg", // Example image path
    demoLink: "#",
  },
  {
    name: "Custom SaaS Dashboard",
    description: "A responsive and intuitive dashboard for a SaaS application, providing real-time data visualization and user management features.",
    technologies: ["Next.js", "React", "Chart.js", "Material-UI"],
    imageUrl: "/banner-images/analyze.jpg", // Example image path
    demoLink: "#",
  },
];

const ProjectHighlights = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: 'background.paper' }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
        Project Highlights
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 3,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}>
              {project.imageUrl && (
                <CardMedia>
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={600}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                  />
                </CardMedia>
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Typography
                      key={techIndex}
                      variant="caption"
                      sx={{
                        display: 'inline-block',
                        mr: 1,
                        mb: 1,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '4px',
                        backgroundColor: 'primary.light',
                        color: 'primary.contrastText',
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
                {project.demoLink && (
                  <Link href={project.demoLink} passHref>
                    <Button variant="contained" color="primary" sx={{ mt: 'auto' }}>
                      View Project
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectHighlights;
