import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const alt = `${brand.productName} — ${brand.category}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function GrowWordmark({ color }: { color: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color,
        fontSize: 42,
        fontWeight: 650,
        letterSpacing: -1.6,
        lineHeight: 1,
      }}
    >
      <span>GR</span>
      <div
        style={{
          display: "flex",
          width: 34,
          height: 31,
          border: `2.5px solid ${color}`,
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 2,
          marginRight: 2,
        }}
      >
        <div
          style={{
            width: 15,
            height: 14,
            border: `1.75px solid ${brand.accent}`,
            borderRadius: "50%",
            marginTop: 1,
            marginLeft: 1,
          }}
        />
      </div>
      <span>W</span>
    </div>
  );
}

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
            alignItems: "center",
          }}
        >
          <GrowWordmark color="#132019" />
          <span
            style={{
              color: "#64715C",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Agricultural intelligence
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div
            style={{
              fontSize: 58,
              lineHeight: 1.08,
              color: "#132019",
              letterSpacing: -2,
              fontWeight: 600,
            }}
          >
            {brand.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#64715C",
            fontSize: 22,
          }}
        >
          <span>{brand.statement}</span>
          <div
            style={{
              display: "flex",
              width: 44,
              height: 40,
              border: "2px solid #173C2B",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.85,
            }}
          >
            <div
              style={{
                width: 18,
                height: 16,
                border: `2px solid ${brand.accent}`,
                borderRadius: "50%",
                marginTop: 1,
                marginLeft: 1,
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
