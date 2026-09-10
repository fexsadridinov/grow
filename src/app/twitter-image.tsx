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
            display: "flex",
            alignItems: "center",
            color: "#FAFAF7",
            fontSize: 40,
            fontWeight: 650,
            letterSpacing: -1.5,
          }}
        >
          <span>GR</span>
          <div
            style={{
              display: "flex",
              width: 32,
              height: 30,
              border: "2.5px solid #FAFAF7",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 2,
              marginRight: 2,
            }}
          >
            <div
              style={{
                width: 14,
                height: 13,
                border: `1.75px solid ${brand.accent}`,
                borderRadius: "50%",
                marginTop: 1,
                marginLeft: 1,
              }}
            />
          </div>
          <span>W</span>
        </div>
        <div
          style={{
            fontSize: 56,
            lineHeight: 1.08,
            color: "#FAFAF7",
            letterSpacing: -2,
            maxWidth: 920,
            fontWeight: 600,
          }}
        >
          {brand.tagline}
        </div>
        <div style={{ color: "#A8B7A0", fontSize: 22 }}>{brand.statement}</div>
      </div>
    ),
    { ...size },
  );
}
