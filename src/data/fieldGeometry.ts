export type FieldZoneTone = "healthy" | "watch" | "stress" | "stable";

export type FieldZone = {
  id: "zone-healthy" | "zone-watch" | "zone-stress" | "zone-stable";
  path: string;
  tone: FieldZoneTone;
};

export const fieldOutlinePath =
  "M78 86 C118 48 168 34 214 42 C268 52 322 64 352 98 C378 132 376 176 358 214 C338 254 292 276 236 274 C176 272 118 258 82 224 C48 192 46 142 78 86 Z";

export const fieldZones: readonly FieldZone[] = [
  {
    id: "zone-healthy",
    path: "M120 96 C158 70 214 62 262 78 C286 88 304 108 308 132 C280 128 248 142 214 154 C176 148 142 128 120 96 Z",
    tone: "healthy",
  },
  {
    id: "zone-watch",
    path: "M214 154 C248 142 280 128 318 148 C336 172 332 204 314 228 C278 236 236 230 208 206 C198 186 200 168 214 154 Z",
    tone: "watch",
  },
  {
    id: "zone-stress",
    path: "M96 148 C128 132 164 148 182 176 C194 198 186 224 158 238 C126 246 98 226 88 196 C84 174 86 158 96 148 Z",
    tone: "stress",
  },
  {
    id: "zone-stable",
    path: "M168 210 C206 198 248 214 268 246 C236 262 188 264 148 248 C150 230 156 218 168 210 Z",
    tone: "stable",
  },
];

export const zoneFill: Record<FieldZoneTone, string> = {
  healthy: "var(--moss)",
  watch: "var(--signal)",
  stress: "var(--alert)",
  stable: "var(--olive)",
};
