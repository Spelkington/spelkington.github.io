import * as React from "react";
import { Link } from "gatsby";
import Navbar from "./navbar";

interface Props {
  location: Location;
  title: string;
  children?: any;
}

const Layout = ({ location, title, children }: Props) => {
  // TODO: Figure out where this __PATH_PREFIX__ is coming from.
  //       I think it has something to do with the gatsby Link feature:
  //       https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/
  //
  //       I'm the solution is to have the path prefix passed in with the props, but
  //       this is a non-breaking issue that can be ignored for now, and I don't want
  //       to make the problem worse.
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
