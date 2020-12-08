import React from "react";

export const TextBlock = ({ children, margin, style }) => (
  <div
    style={{
      margin: `${margin || 5}vw`,
      whiteSpace: "break-spaces",
        ...style,
    }}
  >
    {children}
  </div>
);
