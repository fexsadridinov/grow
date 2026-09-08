"use client";

import { useTranslations } from "next-intl";

const palette = [
  "#3B2A22",
  "#A65C42",
  "#C9A94A",
  "#8A9A78",
  "#64715C",
  "#2F5A40",
  "#173C2B",
];

function cellColor(x: number, y: number): string {
  const nx = (x - 9) / 9;
  const ny = (y - 7) / 7;
  const ridge = Math.sin(nx * 2.1 + ny * 1.4) * 0.4;
  const anomaly = Math.hypot(x - 5, y - 4) < 2.4 ? -0.55 : 0;
  const value = 0.52 + ridge + anomaly + (x % 3 === 0 ? -0.05 : 0);
  const index = Math.max(0, Math.min(palette.length - 1, Math.round(value * (palette.length - 1))));
  return palette[index] ?? palette[3];
}

export function RasterField() {
  const t = useTranslations("drone");
  const cols = 18;
  const rows = 14;

  return (
    <div className="overflow-hidden rounded-xl border border-white/8 bg-night p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="tech-label text-moss">{t("raster")}</p>
        <p className="font-mono text-[11px] tracking-[0.12em] text-paper/40">
          {t("conceptualNdvi")}
        </p>
      </div>
      <svg
        viewBox={`0 0 ${cols} ${rows}`}
        className="mt-5 h-auto w-full"
        role="img"
        aria-label={t("rasterAlt")}
      >
        {Array.from({ length: rows }, (_, y) =>
          Array.from({ length: cols }, (_, x) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="0.94"
              height="0.94"
              rx="0.06"
              fill={cellColor(x, y)}
            />
          )),
        )}
      </svg>
      <div className="mt-4 flex items-center justify-between gap-2 text-[11px] text-paper/45">
        <span>{t("lowVigor")}</span>
        <span className="mx-3 h-1 min-w-0 flex-1 rounded-full bg-linear-to-r from-alert via-signal to-forest" />
        <span>{t("highVigor")}</span>
      </div>
    </div>
  );
}
