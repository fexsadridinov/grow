export type RoadmapHorizon = "now" | "next" | "later";

export const roadmap = [
  {
    id: "now",
    items: [
      "profiles",
      "seasons",
      "images",
      "agronomy",
      "analysis",
      "recommendations",
      "review",
    ],
  },
  {
    id: "next",
    items: ["weather", "soil", "satellite", "anomaly", "timeline"],
  },
  {
    id: "later",
    items: [
      "drones",
      "orthomosaics",
      "zones",
      "prescriptions",
      "predictive",
      "machines",
    ],
  },
] as const;
