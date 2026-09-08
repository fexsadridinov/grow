"use client";

import { useTranslations } from "next-intl";
import {
  Camera,
  Database,
  CloudRain,
  Layers,
  Satellite,
  Drone,
  UserRoundCheck,
  ChartNoAxesCombined,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { inputModalityIds, type InputModalityId } from "@/data/knowledge";

const icons: Record<InputModalityId, LucideIcon> = {
  photos: Camera,
  "field-data": Database,
  weather: CloudRain,
  soil: Layers,
  satellite: Satellite,
  drones: Drone,
  expert: UserRoundCheck,
  outcomes: ChartNoAxesCombined,
};

export function DataInputGrid() {
  const t = useTranslations("inputs");

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {inputModalityIds.map((id) => {
        const Icon = icons[id];
        return (
          <article
            key={id}
            className="min-h-[220px] min-w-0 rounded-lg border border-ink/10 bg-paper p-5"
          >
            <div className="flex h-24 items-end rounded-md bg-canvas px-3 py-3">
              <ModalityMark id={id} />
            </div>
            <div className="mt-5 flex items-center gap-2 text-olive">
              <Icon size={16} aria-hidden="true" />
              <h3 className="tech-label">{t(`items.${id}.label`)}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              {t(`items.${id}.description`)}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function ModalityMark({ id }: { id: InputModalityId }) {
  if (id === "photos") {
    return (
      <svg viewBox="0 0 120 48" className="h-12 w-full" aria-hidden="true">
        <rect x="8" y="8" width="46" height="32" rx="3" fill="#173C2B" />
        <rect x="62" y="14" width="46" height="26" rx="3" fill="#A8B7A0" />
      </svg>
    );
  }
  if (id === "weather") {
    return (
      <svg viewBox="0 0 120 48" className="h-12 w-full" aria-hidden="true">
        <path d="M10 34 C22 18 38 18 48 30" stroke="#64715C" fill="none" />
        <path d="M48 30 C62 12 86 14 108 28" stroke="#173C2B" fill="none" />
      </svg>
    );
  }
  if (id === "satellite" || id === "drones") {
    return (
      <svg viewBox="0 0 120 48" className="h-12 w-full" aria-hidden="true">
        {Array.from({ length: 5 }, (_, y) =>
          Array.from({ length: 10 }, (_, x) => (
            <rect
              key={`${x}-${y}`}
              x={8 + x * 10}
              y={6 + y * 8}
              width="8"
              height="6"
              fill={x + y > 8 ? "#173C2B" : x + y > 5 ? "#64715C" : "#C9A94A"}
            />
          )),
        )}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 48" className="h-12 w-full" aria-hidden="true">
      <line x1="10" y1="36" x2="110" y2="36" stroke="rgba(19,32,25,0.2)" />
      <rect x="18" y="18" width="10" height="18" fill="#173C2B" />
      <rect x="36" y="12" width="10" height="24" fill="#64715C" />
      <rect x="54" y="20" width="10" height="16" fill="#A8B7A0" />
      <rect x="72" y="8" width="10" height="28" fill="#C9A94A" />
      <rect x="90" y="16" width="10" height="20" fill="#173C2B" />
    </svg>
  );
}
