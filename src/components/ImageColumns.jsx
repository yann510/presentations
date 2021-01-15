import React from "react";

export const ImageColumns = (props) => {
  const { columns } = props;
  const { images } = props;
  const { imageWidth, imageHeight } = props;
  const gridTemplateColumns = [...Array(columns || 1)].map(() => "1fr").join(" ");

  return (
    <div style={{ display: "grid", gridTemplateColumns, gridGap: 30 }}>
      {images.map((x) => (
        <img alt="" key={x} src={x} style={{ width: imageWidth || "auto", height: imageHeight || "auto" }} />
      ))}
    </div>
  );
};
