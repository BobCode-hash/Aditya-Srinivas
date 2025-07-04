'use client';
import * as React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const OccupationSocialCard = () => {
  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://instagram.com' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Front-End Developer
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Based in New York, NY
        </Typography>
        <Box>
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              aria-label={social.url}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default OccupationSocialCard;
