"use client";
import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const IntroBanner = () => {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        pt: 8,
        pb: 6,
      }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom>
            {"  Hi, I'm a Front-End Developer"}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph>
            With over 4 years of experience, I specialize in building modern,
            responsive, and user-friendly web applications using React.js,
            Next.js, TypeScript, and Material-UI.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default IntroBanner;
