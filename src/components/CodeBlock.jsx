import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CodeBlock = ({ language, codeString }) => {
  return (
    <SyntaxHighlighter language={language} style={monokaiSublime}>
      {codeString}
    </SyntaxHighlighter>
  );
};
