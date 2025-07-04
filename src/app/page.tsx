import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import IntroBanner from "../components/IntroBanner";
import OccupationSocialCard from "../components/OccupationSocialCard";
import WorkProcess from "../components/WorkProcess";
import WhatIDo from "../components/WhatIDo";
import AnimatedSection from "../components/AnimatedSection";
import ContactCTA from "@/components/connect-with-me";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <HeroBanner />
      <Container component="main" sx={{ mt: 4, mb: 2 }}>
        <AnimatedSection>
          <IntroBanner />
        </AnimatedSection>
        <AnimatedSection>
          <OccupationSocialCard />
        </AnimatedSection>
        <AnimatedSection>
          <WorkProcess />
        </AnimatedSection>
        <AnimatedSection>
          <WhatIDo />
        </AnimatedSection>
        <AnimatedSection>
          <ContactCTA />
        </AnimatedSection>
      </Container>
      <Footer />
    </Box>
  );
}
