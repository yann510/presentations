import React from "react";
import { useThemeUI } from "theme-ui";
import { useDeck } from "mdx-deck";

export const ProgressBar = () => {
  const { theme } = useThemeUI();
  const { index, length } = useDeck();
  const progressPercentage = Math.ceil(((index + 1) * 100) / length);

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "7px",
        zIndex: 1,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "40vw",
          backgroundColor: theme.colors.progressBarBackground || "#fff",
          height: "8px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1c344f" || theme.colors.text,
            width: `${progressPercentage}%`,
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};
