"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactCTA() {
  const theme = useTheme();

  const containerVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring" as const,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    offscreen: {
      opacity: 0,
      y: 20,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };
  // https://doodleipsum.com/700/flat?i=782f9769581c7af3970bea97d80835ac
  // https://doodleipsum.com/800x600/flat?sat=-100&i=fefedbaa7c2dbf4b2773ccacb003f18f
  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        px: 4,
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "30px",
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: `url("https://doodleipsum.com/700/flat?i=782f9769581c7af3970bea97d80835ac")`,
        backgroundRepeat: "no-repeat",
        backgroundFit: "cover",
        backgroundPosition: "center",
      }}>
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${theme.palette.primary.main}1A 0%, transparent 60%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          right: -150,
          width: 400,
          height: 400,
          background: `radial-gradient(circle, ${theme.palette.secondary.main}1A 0%, transparent 60%)`,
          zIndex: 0,
        }}
      />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.div variants={itemVariants}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
            sx={{
              textShadow: `0 2px 10px ${theme.palette.background.default}`,
            }}>
            Contact Me
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            fontWeight="bold"
            mb={2}
            sx={{
              textShadow: `0 2px 10px ${theme.palette.background.default}`,
            }}>
            Ready to develop your next big thing?
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={2}
            sx={{
              textShadow: `0 2px 10px ${theme.palette.background.default}`,
            }}>
            Let&rsquo;s build something great.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="h6" color="text.secondary" mb={6}>
            Have a project in mind? I&rsquo;d love to hear about it.
          </Typography>
        </motion.div>

        <Box
          display="flex"
          justifyContent="center"
          gap={{ xs: 6, md: 8 }}
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center">
          <motion.div variants={itemVariants}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 6,
                py: 2,
                borderRadius: "16px",
                fontWeight: "bold",
                boxShadow: theme.shadows[4],
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}>
              Get in Touch
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                px: 6,
                py: 2,
                borderRadius: "16px",
                fontWeight: "bold",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}>
              View My Services
            </Button>
          </motion.div>
        </Box>

        <motion.div variants={itemVariants}>
          <Box mt={12} display="flex" justifyContent="center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              <Image
                src="/thumb-memoji.png"
                alt="Memoji"
                width={150}
                height={150}
                style={{
                  filter: `drop-shadow(0 10px 15px ${theme.palette.background.default})`,
                }}
              />
            </motion.div>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
}
