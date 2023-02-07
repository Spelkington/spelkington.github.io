import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import DoodleSpeen from "./assets/fonts/DoodleSpeen.ttf";

// A custom theme for this app
let theme = createTheme({
  typography: {
    fontFamily: "Roboto, Doodle Speen",
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
            radial-gradient(circle at 1px 1px, #DDD 1px, transparent 0),
            radial-gradient(circle at 1px 1px, #DDD 1px, transparent 0);
          background-position: 1cm 1cm, 1.4cm 1.75cm;
          background-size: 0.8cm 1.5cm;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `,
    },
  },
});

// theme = responsiveFontSizes(theme);

export default theme;
