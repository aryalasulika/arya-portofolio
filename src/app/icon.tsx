import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#102A21",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4F52B",
          fontWeight: 900,
          borderRadius: 8,
          border: "2px solid #111713",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
