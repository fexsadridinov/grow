import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#173C2B",
          color: "#FAFAF7",
          fontSize: 16,
          letterSpacing: 1,
          fontWeight: 600,
        }}
      >
        F
      </div>
    ),
    { ...size },
  );
}
