"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import styles from "./Services.module.css";
import IntroSection from "@/components/services/IntroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import WhyChooseMe from "@/components/services/WhyChooseMe";
import ProjectHighlights from "@/components/services/ProjectHighlights";
import TechnicalSkills from "@/components/services/TechnicalSkills";
import CallToAction from "@/components/services/CallToAction";

const ServicesPage = () => {
  return (
    <Box className={styles.container}>
      <Container maxWidth="lg">
        <IntroSection />
        <ServicesOverview />
        <WhyChooseMe />
        <ProjectHighlights />
        <TechnicalSkills />
        <CallToAction />
      </Container>
    </Box>
  );
};

export default ServicesPage;
