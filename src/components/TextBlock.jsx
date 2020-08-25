import React from "react";

export const TextBlock = ({ children, margin }) => (
  <div
    style={{
      margin: `${margin || 5}vw`,
      whiteSpace: "break-spaces",
    }}
  >
    {children}
  </div>
);
