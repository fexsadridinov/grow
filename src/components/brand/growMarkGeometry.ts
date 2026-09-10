export const GROW_MARK_VIEWBOX = "0 0 32 32";

export const GROW_MARK_OUTER_ELLIPSE = {
  cx: 16,
  cy: 16,
  rx: 12.2,
  ry: 11.35,
} as const;

/** Offset inner contour — a second field boundary, slightly shifted. */
export const GROW_MARK_INNER = {
  cx: 16.85,
  cy: 16.7,
  rx: 7.15,
  ry: 6.55,
} as const;

/** Circumference ≈ 74. Dash leaves a small perimeter gap. */
export const GROW_MARK_OUTER_DASH = "63.5 10.5";
export const GROW_MARK_OUTER_LENGTH = 74;
