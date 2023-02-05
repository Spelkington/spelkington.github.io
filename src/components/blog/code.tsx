// Yoinked with love from https://github.com/annarosca/gatsby-starter-blog-dev-mdx/blob/main/src/components/code.js

import React from "react";
import Highlight, * as Prism from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";

const copyToClipboard = (str: string) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const Button = (props: any) => (
  <button
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      border: "none",
      boxShadow: "none",
      textDecoration: "none",
      margin: "8px",
      padding: "8px 12px",
      background: "#E2E8F022",
      borderRadius: "8px",
      cursor: "pointer",
      color: "#E2E8F0",
      fontSize: "14px",
      fontFamily: "sans-serif",
      lineHeight: "1",
    }}
    {...props}
  />
);

const LanguageRibbon = (props: any) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      border: "none",
      boxShadow: "none",
      textDecoration: "none",
      marginLeft: "2rem",
      padding: "8px 12px",
      background: "#d5e6ff",
      borderRadius: " 0px 0px 8px 8px",
      color: "#000",
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "500",
      fontFamily: "sans-serif",
      lineHeight: "1",
    }}
  >
    {props.language}
  </div>
);

const FileRibbon = (props: { title: string }) => (
  <div
    style={{
      display: "block",
      padding: "8px 2rem",
      borderBottom: "2px solid #d5e6ff",
      boxShadow: "none",
      textDecoration: "none",
      color: "white",
      fontSize: "13px",
      textTransform: "lowercase",
      fontWeight: "500",
      fontFamily: "sans-serif",
      fontStyle: "italic",
      lineHeight: "1",
    }}
  >
    {props.title}
  </div>
);

interface CodeProps {
  className: string;
  children: string;
}

export const Code = (props: CodeProps) => {
  const [isCopied, setIsCopied] = React.useState(false);

  console.log(props);

  const codeString = props.children;

  // If a language was provided, remove the "language-" from the start of the
  // className - otherwise, set the language to an empty string
  const language = (
    props.className ? props.className.slice(9) : null
  ) as Prism.Language;

  return (
    <Highlight
      {...Prism.defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            borderRadius: "8px",
            overflow: "auto",
          }}
        >
          {/* {title && <FileRibbon title={title}></FileRibbon>} */}
          <div
            style={{
              display: "flex",
              position: "relative",

              padding: "0 0 40px 0",
            }}
          >
            {language && <LanguageRibbon language={language}></LanguageRibbon>}
            <Button
              onClick={() => {
                copyToClipboard(codeString);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 3000);
              }}
            >
              {isCopied ? "🎉 Copied!" : "Copy"}
            </Button>
          </div>
          {tokens.map((line, i) => (
            <div
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
