"use client";
import * as React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const ConnectWithMeCard = () => {
  const socialLinks = [
    { icon: <InstagramIcon />, url: "https://instagram.com" },
    { icon: <LinkedInIcon />, url: "https://linkedin.com" },
    { icon: <TwitterIcon />, url: "https://twitter.com" },
  ];

  return (
    <Card sx={{ my: 4 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Connect With Me
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {
            " I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team."
          }
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
                color: "text.secondary",
                "&:hover": {
                  color: "primary.main",
                },
              }}>
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ConnectWithMeCard;
