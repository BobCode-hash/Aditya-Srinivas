"use client";

import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import {
  CalendarMonth,
  ShowChart,
  DesignServices,
  LaptopMac,
} from "@mui/icons-material";

import { Theme } from "@mui/material/styles";

const workSteps = (theme: Theme) => [
  {
    icon: <CalendarMonth sx={{ color: theme.palette.text.primary }} />,
    title: "1. Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <ShowChart sx={{ color: theme.palette.text.primary }} />,
    title: "2. Analyze",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <DesignServices sx={{ color: theme.palette.text.primary }} />,
    title: "3. Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <LaptopMac sx={{ color: theme.palette.text.primary }} />,
    title: "4. Launch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
];

export default function WorkProcess() {
  const theme = useTheme();
  const steps = workSteps(theme);

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}>
      <Grid container spacing={6} alignItems="center">
        {/* LEFT TEXT */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.text.primary, mb: 2 }}>
            Work Process
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.text.secondary}
            mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </Typography>
          <Typography variant="body1" color={theme.palette.text.secondary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </Typography>
        </Grid>

        {/* RIGHT STEPS */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            {steps.map((step, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{
                  mt: index % 2 !== 0 ? 3 : 0,
                  textAlign: "start",
                }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: theme.palette.background.paper,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      minHeight: 180,
                      textAlign: "start",
                    }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "start",
                      }}>
                      {step.icon}
                    </Box>
                    <Typography fontWeight="bold" sx={{ fontSize: 16 }}>
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={theme.palette.text.secondary}>
                      {step.description}
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
