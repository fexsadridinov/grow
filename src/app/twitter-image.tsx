import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const alt = `${brand.productName} — ${brand.category}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1712",
          padding: 72,
        }}
      >
        <div
          style={{
            color: "#A8B7A0",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          FIELD / OS
        </div>
        <div
          style={{
            fontSize: 60,
            lineHeight: 1.08,
            color: "#FAFAF7",
            letterSpacing: -2,
            maxWidth: 920,
          }}
        >
          The operating intelligence layer for agriculture.
        </div>
        <div style={{ color: "#A8B7A0", fontSize: 22 }}>{brand.description}</div>
      </div>
    ),
    { ...size },
  );
}
