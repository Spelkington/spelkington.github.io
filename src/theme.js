import { createTheme } from "@mui/material/styles";
import DoodleSpeen from "./assets/fonts/DoodleSpeen.ttf";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Max size at lg for H1
const MAX_HEADER_BASE_SIZE = 3;

// Rate at which decreasing header sizes scale down from lg-H1
const HEADER_SIZE_STEP = 0.8;

// Rate at which scaling occurs between md, sm, and xs viewports
const SCALING_FACTOR = 0.7;

// A custom theme for this app
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Roboto, Doodle Speen",
    htmlFontSize: 16,

    body1: {
      margin: "1.5rem 1.5rem 2rem 1.5rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Doodle Speen";
          src: url(${DoodleSpeen});
        }

        body {
          background-image: 
            radial-gradient(circle at 2px 2px, #EEE 2px, transparent 0),
            radial-gradient(circle at 2px 2px, #EEE 2px, transparent 0);
          background-position: 1cm 1cm, 1.4cm 1.75cm;
          background-size: 0.8cm 1.5cm;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `,
    },
    MuiTypography: {
      defaultProps: {
        gutterBottom: false,
        variantMapping: {
          subtitle1: "p",
          subtitle2: "p",
          body1: "p",
          body2: "p",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        marginTop: "1rem",
      },
    },
  },
});

for (let i = 1; i < 6; i++) {
  const heading = "h" + i;
  const baseSize = MAX_HEADER_BASE_SIZE * Math.pow(HEADER_SIZE_STEP, i - 1);
  theme.typography[heading] = {
    marginTop: "2.5rem",
    fontSize: baseSize + "rem",
    [theme.breakpoints.down("md")]: {
      fontSize: SCALING_FACTOR * baseSize + "rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: SCALING_FACTOR * SCALING_FACTOR * baseSize + "rem",
    },
  };
}

export default theme;
