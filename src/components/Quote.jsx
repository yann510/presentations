import React from "react";
import { useThemeUI } from "theme-ui";

export const Quote = (props) => {
  const { theme } = useThemeUI();
  console.log(theme);

  return (
    <div
      style={{
        backgroundColor: theme.colors.backdrop,
        padding: 10,
        borderLeft: `10px solid ${theme.colors.primary}`,
      }}
    >
      {props.children}
    </div>
  );
};
