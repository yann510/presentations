import React from "react";

export const VideoSlide = ({ src, style, title }) => (
  <div style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
    {title && <h1 style={{ textAlign: "center" }}>{title}</h1>}
    <video
      src={src}
      autoPlay={true}
      loop={true}
      muted={true}
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
