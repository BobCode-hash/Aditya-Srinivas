"use client";
import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaUsers } from "react-icons/fa";
import styles from "./Services.module.css";
import WhatIDo from "@/components/WhatIDo";
import ProjectDiscussSection from "@/components/ProjectDiscussSection";
import WorkProcess from "@/components/WorkProcess";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Building responsive and modern web applications using the latest technologies.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <FaUsers />,
    title: "Consulting",
    description:
      "Providing expert advice to help you achieve your business goals.",
  },
];

import { Variants } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ConnectWithMeCard from "@/components/ConnectWithMeCard";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ServicesPage = () => {
  return (
    <Box className={styles.container}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        className={styles.title}
        mt={"4vw"}>
        Our Services
      </Typography>
      <Box className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={styles.motionCard}>
            <Card className={styles.card}>
              <CardContent>
                <Box className={styles.iconWrapper}>{service.icon}</Box>
                <Typography variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
      <Box className={styles.workProcess}>
        <WorkProcess />
      </Box>
      <Box className={styles.whatIDo}>
        <WhatIDo />
      </Box>
      <Box className={styles.projectDiscuss}>
        <ProjectDiscussSection />
      </Box>
      <AnimatedSection>
        <ConnectWithMeCard />
      </AnimatedSection>
    </Box>
  );
};

export default ServicesPage;
