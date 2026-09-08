import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const alt = `${brand.productName} — ${brand.category}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3F1EA",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#64715C",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <span>FIELD / OS</span>
          <span>Agricultural intelligence</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              color: "#132019",
              letterSpacing: -2,
            }}
          >
            The operating intelligence layer for agriculture.
          </div>
        </div>
        <div style={{ color: "#64715C", fontSize: 22 }}>
          Built around the field, not the prompt.
        </div>
      </div>
    ),
    { ...size },
  );
}
