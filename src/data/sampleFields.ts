export type RiskSeverity = "low" | "moderate" | "high";
export type FieldStatus = "stable" | "attention" | "watch";
export type SoilMoistureState = "stable" | "declining" | "below-target";
export type CropId = "winterWheat" | "sunflower";
export type WeatherCondition = "overcast" | "humid" | "dry" | "clear";
export type FieldId = "field-14" | "field-7" | "field-21" | "field-3";
export type FieldRiskId = "n-stress" | "disease" | "fungal" | "moisture";
export type TimelineEventId =
  | "t1-14"
  | "t2-14"
  | "t3-14"
  | "t4-14"
  | "t5-14"
  | "t1-7"
  | "t2-7"
  | "t1-21"
  | "t2-21"
  | "t1-3";

export type FieldRisk = {
  id: FieldRiskId;
  confidence: number;
  severity: RiskSeverity;
};

export type TimelineEvent = {
  id: TimelineEventId;
  date: string;
};

export type SampleField = {
  id: FieldId;
  crop: CropId;
  areaHectares: number;
  healthScore: number;
  status: FieldStatus;
  observationDate: string;
  soilMoisture: SoilMoistureState;
  weather: {
    temperatureC: number;
    humidityPercent: number;
    condition: WeatherCondition;
  };
  affectedAreaHectares?: number;
  affectedAreaPercent?: readonly [number, number];
  priority?: "high" | "medium" | "low";
  risks: readonly FieldRisk[];
  timeline: readonly TimelineEvent[];
};

export const sampleFields: readonly SampleField[] = [
  {
    id: "field-14",
    crop: "winterWheat",
    areaHectares: 128,
    healthScore: 74,
    status: "attention",
    observationDate: "2026-09-05",
    soilMoisture: "stable",
    weather: {
      temperatureC: 18,
      humidityPercent: 64,
      condition: "overcast",
    },
    affectedAreaHectares: 42,
    affectedAreaPercent: [13, 18],
    priority: "high",
    risks: [
      { id: "n-stress", confidence: 0.78, severity: "high" },
      { id: "disease", confidence: 0.44, severity: "moderate" },
    ],
    timeline: [
      { id: "t1-14", date: "2026-04-14" },
      { id: "t2-14", date: "2026-04-16" },
      { id: "t3-14", date: "2026-04-18" },
      { id: "t4-14", date: "2026-04-24" },
      { id: "t5-14", date: "2026-05-02" },
    ],
  },
  {
    id: "field-7",
    crop: "winterWheat",
    areaHectares: 96,
    healthScore: 81,
    status: "watch",
    observationDate: "2026-09-05",
    soilMoisture: "stable",
    weather: {
      temperatureC: 18,
      humidityPercent: 71,
      condition: "humid",
    },
    affectedAreaHectares: 18,
    priority: "medium",
    risks: [{ id: "fungal", confidence: 0.61, severity: "moderate" }],
    timeline: [
      { id: "t1-7", date: "2026-09-03" },
      { id: "t2-7", date: "2026-09-05" },
    ],
  },
  {
    id: "field-21",
    crop: "winterWheat",
    areaHectares: 154,
    healthScore: 86,
    status: "watch",
    observationDate: "2026-09-05",
    soilMoisture: "below-target",
    weather: {
      temperatureC: 21,
      humidityPercent: 48,
      condition: "dry",
    },
    priority: "medium",
    risks: [{ id: "moisture", confidence: 0.69, severity: "moderate" }],
    timeline: [
      { id: "t1-21", date: "2026-09-04" },
      { id: "t2-21", date: "2026-09-05" },
    ],
  },
  {
    id: "field-3",
    crop: "sunflower",
    areaHectares: 87,
    healthScore: 91,
    status: "stable",
    observationDate: "2026-09-04",
    soilMoisture: "stable",
    weather: {
      temperatureC: 19,
      humidityPercent: 55,
      condition: "clear",
    },
    risks: [],
    timeline: [{ id: "t1-3", date: "2026-08-28" }],
  },
];

export const featuredField: SampleField = sampleFields[0];

export const morningSummary = {
  fieldsMonitored: 12,
  totalHectares: 1843,
  attentionCount: 3,
  activeRiskAreaHectares: 67,
  priorityInspections: 5,
} as const;
