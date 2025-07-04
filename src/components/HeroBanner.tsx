"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

gsap.registerPlugin(Flip);

const HeroBanner: React.FC = () => {
  const theme = useTheme();
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null); // This will be the flex container initially
  const bannerImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current && contentRef.current && bannerImageRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Initial state for letters (hidden and off-screen to the left)
      gsap.set(".letter", { opacity: 0, xPercent: -100 });
      // Initial state for banner image (hidden)
      gsap.set(bannerImageRef.current, { opacity: 0 });

      // Phase 1: Elements appear one by one from left to right in a linear fashion
      tl.to(".letter", {
        opacity: 1,
        xPercent: 0,
        duration: 2,
        stagger: 0.2,
        // Ensure elements fill their space during this linear animation
        width: "100%",
        height: "100%",
      });

      // Phase 2: Transition to Grid/Cube Formation using Flip
      tl.add(() => {
        // Change parent (contentRef) to grid layout
        gsap.set(contentRef.current, {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // Top 3 cubes
          gridTemplateRows: "repeat(2, 1fr)", // Bottom 3 cubes
          gap: theme.spacing(1),
          // Reset flex properties as it's now a grid container
          flexDirection: "unset",
          alignItems: "unset",
          justifyContent: "unset",
        });
      }, "+=0.5"); // Add this phase after a slight delay from the previous one

      // Phase 3: Animate squares to disappear simultaneously
      tl.to(
        ".letter",
        {
          opacity: 0,
          scale: 0.5,
          duration: 2.5, // Adjusted duration for disappearance
          ease: "power2.in",
        },
        "+=1.5" // Ensure enough time after cube formation and before final message
      );

      // Phase 4: Animate banner image to appear
      tl.to(
        bannerImageRef.current,
        {
          opacity: 1,
          duration: 3.5,
          ease: "power2.out",
        },
        "-=1.5" // Start fading in the banner image while cubes are still disappearing
      );

      // Phase 5: Animate final message to appear on top of the banner image
      tl.fromTo(
        ".gsap-final-message",
        { opacity: 0, y: 30, scale: 0.8 }, // From state
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 4,
          ease: "elastic.out(1, 1)",
        }, // To state
        "-=1.5" // Start slightly before the end of the previous animation for a smoother transition
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      ref={bannerRef}
      sx={{
        width: "100%",
        height: "100vh", // Use viewport height to ensure it covers the entire section
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.background.paper,
        color:
          theme.palette.mode === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black,
        padding: theme.spacing(4),
        textAlign: "center",
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
        mt: theme.spacing(8), // Margin top to be below the header
        position: "relative", // For absolute positioning of final message
      }}>
      <Box
        ref={contentRef}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex", // Initial flex container for linear layout
          flexDirection: "row",
          alignItems: "stretch", // Stretch to fill height
          justifyContent: "space-around", // Distribute space
          overflow: "hidden", // Hide overflow during initial slide
        }}>
        {["Idea", "Research", "Analyze", "Design", "Build", "Launch"].map(
          (text) => {
            let imageUrl = "";
            switch (text) {
              case "Idea":
                imageUrl = "/banner-images/Idea.png";
                break;
              case "Research":
                imageUrl = "/banner-images/research.jpg";
                break;
              case "Analyze":
                imageUrl = "/banner-images/analyze.jpg";
                break;
              case "Design":
                imageUrl = "/banner-images/design.jpg";
                break;
              case "Build":
                imageUrl = "/banner-images/build.jpg";
                break;
              case "Launch":
                imageUrl = "/banner-images/start-up.jpg"; // Assuming start-up.jpg for Launch
                break;
              default:
                imageUrl = "";
            }

            return (
              <Box
                key={text}
                className="letter"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: theme.palette.common.white, // Changed to white for better contrast with images
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  flex: 1, // Take equal width in flex container
                  height: "100%", // Fill height in flex container
                  borderRadius: theme.shape.borderRadius, // Keep for cube formation
                  overflow: "hidden",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.7)", // Add text shadow for readability
                }}>
                {text}
              </Box>
            );
          }
        )}
      </Box>
      {/* Banner Image */}
      <Box
        ref={bannerImageRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/banner-images/banner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0, // Initially hidden
          zIndex: 1, // Ensure it's behind the text but above the initial background
        }}
      />
      {/* Moved outside contentRef to maintain absolute positioning relative to bannerRef */}
      <Typography
        className="gsap-final-message"
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          width: "100%",
          zIndex: 2, // Ensure text is on top of the banner image
        }}>
        {" Let's build your future together"}
      </Typography>
    </Box>
  );
};

export default HeroBanner;
