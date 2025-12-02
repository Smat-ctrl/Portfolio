import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontFamily: "system-ui, -apple-system, sans-serif",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: "20px" }}>smat-ctrl</div>
        <div style={{ fontSize: 40, color: "#888" }}>Software Developer</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
