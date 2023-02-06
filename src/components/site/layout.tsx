import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "./navbar";
import theme from "../../theme";

interface Props {
  location: Location;
  title: string;
  children?: any;
}

const Layout = ({ location, children }: Props) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          className="global-wrapper"
          data-is-root-path={isRootPath}
          sx={{ padding: { xs: "20px 20px 20px 20px", sm: "100px 0 0 0" } }}
          maxWidth="sm"
        >
          <header className="global-header">
            <Navbar />
          </header>
          <main>
            <Grid container>{children}</Grid>
          </main>
          <footer></footer>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
