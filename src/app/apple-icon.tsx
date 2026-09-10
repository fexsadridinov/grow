import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            display: "flex",
            width: 108,
            height: 100,
            border: "7px solid #FAFAF7",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 52,
              height: 48,
              border: "5px solid #86A56E",
              borderRadius: "50%",
              marginTop: 4,
              marginLeft: 4,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
