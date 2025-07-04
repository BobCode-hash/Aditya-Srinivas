import { createTheme } from "@mui/material/styles";

// Define the color palettes
const darkPalette = {
  primary: {
    main: "#9f55ff", // goldenrod
  },
  secondary: {
    main: "#4062BB", // true blue
  },
  error: {
    main: "#ED254E", // red
  },
  background: {
    default: "#28262C", // Raisin Black
    paper: "#28262C",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#E0E0E0",
  },
};

const lightPalette = {
  primary: {
    main: "#D5A021", // goldenrod
  },
  secondary: {
    main: "#4062BB", // true blue
  },
  error: {
    main: "#ED254E", // red
  },
  background: {
    default: "#DBE4EE", // Alice Blue
    paper: "#FFFFFF",
  },
  text: {
    primary: "#28262C", // Raisin Black
    secondary: "#555555",
  },
};

// Function to create a theme
const createAppTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "dark" ? darkPalette : lightPalette),
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      h1: {
        fontWeight: 700,
        fontSize: "2.5rem", // Unified font size for all titles
      },
      h2: {
        fontWeight: 700,
        fontSize: "2.5rem", // Unified font size for all titles
      },
      h3: {
        fontWeight: 700,
        fontSize: "2.5rem", // Unified font size for all titles
      },
      body1: {
        fontSize: "1rem", // Unified font size for all other text
      },
      body2: {
        fontSize: "1rem", // Ensure body2 also uses the same font size
      },
      subtitle1: {
        fontSize: "1rem", // Ensure subtitle1 also uses the same font size
      },
      subtitle2: {
        fontSize: "1rem", // Ensure subtitle2 also uses the same font size
      },
      button: {
        fontSize: "1rem", // Ensure button text also uses the same font size
      },
      caption: {
        fontSize: "1rem", // Ensure caption also uses the same font size
      },
      overline: {
        fontSize: "1rem", // Ensure overline also uses the same font size
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });
};

export default createAppTheme;
