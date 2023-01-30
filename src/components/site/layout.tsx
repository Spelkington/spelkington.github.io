import * as React from "react";
import Navbar from "./navbar";

interface Props {
  location: Location;
  title: string;
  children?: any;
}

const Layout = ({ location, children }: Props) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  // TODO: What is this for?
  let header;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
