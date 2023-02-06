import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
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
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <Container maxWidth="md">
            <header className="global-header">
              <Navbar />
            </header>
            <main>{children}</main>
          </Container>
          <footer></footer>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
