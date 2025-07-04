'use client';
import * as React from 'react';
import {
  Container,
  Typography,
  Link,
  Box,
  IconButton,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://instagram.com' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="body1">My Portfolio</Typography>
          <Box>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                aria-label={social.url}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 2 }}>
          {'© '}
          <Link color="inherit" href="/">
            My Portfolio
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
