import React from "react";

export const ImageSlide = ({ src, style, title }) => (
  <div style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
    {title && <h1 style={{ textAlign: "center" }}>{title}</h1>}
    <img
      src={src}
      alt={"Make warning happy"}
      style={{
        width: "auto",
        maxWidth: "80vw",
        height: "auto",
        maxHeight: "80vh",
        justifySelf: "center",
        ...style,
      }}
    />
  </div>
);
