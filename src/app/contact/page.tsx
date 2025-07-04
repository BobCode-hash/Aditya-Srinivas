import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactMeForm from "./contact-me";
import styles from "./Contact.module.css";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectDiscussSection from "@/components/ProjectDiscussSection";

const ContactPage = () => {
  return (
    <Box>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 2 }}>
        <AnimatedSection>
          <ProjectDiscussSection />
        </AnimatedSection>
        <AnimatedSection>
          <Box className={styles.container}>
            <ContactMeForm />
          </Box>
        </AnimatedSection>
      </Container>

      <Footer />
    </Box>
  );
};

export default ContactPage;
