import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Jean-Cyril Drouhin — SharePoint Guy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            color: "#94a3b8",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          spjc.fr
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700 }}>
          <span>Hi, I&apos;m&nbsp;</span>
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            JC
          </span>
        </div>
        <div
          style={{
            fontSize: 44,
            fontStyle: "italic",
            color: "#e2e8f0",
            marginTop: 12,
          }}
        >
          A SharePoint Guy · Cloud Solution Architect
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            fontSize: 28,
            color: "#38bdf8",
            fontFamily: "monospace",
          }}
        >
          <span>SharePoint</span>
          <span style={{ color: "#475569" }}>/</span>
          <span>M365</span>
          <span style={{ color: "#475569" }}>/</span>
          <span>Azure</span>
          <span style={{ color: "#475569" }}>/</span>
          <span>PowerShell</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
