"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function ProjectDiscussSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        marginTop: "8vw",
      }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color={theme.palette.text.primary}
          gutterBottom>
          Do you have Project Idia?
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color={theme.palette.text.primary}
          gutterBottom>
          {"Let's discuss your project!"}
        </Typography>

        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          maxWidth="600px"
          mt={2}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Typography>

        {/* <Button
          variant="contained"
          sx={{
            mt: 4,
            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            px: 4,
            py: 1.5,
            borderRadius: "12px",
            boxShadow: `0 4px 20px ${theme.palette.primary.light}`,
            "&:hover": {
              background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
            },
          }}
          endIcon={<ArrowForwardIcon />}>
          Let’s work Together
        </Button> */}
      </motion.div>
    </Box>
  );
}
