export type GraphNodeId =
  | "n-def"
  | "chlorosis"
  | "older-leaves"
  | "low-n"
  | "roots"
  | "waterlog"
  | "sulfur"
  | "septoria"
  | "wheat"
  | "humidity"
  | "rainfall"
  | "lesions"
  | "stage";

export type GraphNode = {
  id: GraphNodeId;
  x: number;
  y: number;
  cluster: "nitrogen" | "septoria";
  primary?: boolean;
};

export type GraphEdge = {
  from: GraphNodeId;
  to: GraphNodeId;
};

export const knowledgeSourceIds = [
  "research",
  "extension",
  "handbooks",
  "regional",
  "expert",
  "protocols",
] as const;

export const retrievalFactorIds = [
  "relevance",
  "sourceQuality",
  "cropFit",
  "geographicFit",
  "recency",
] as const;

export const knowledgeGraphNodes: readonly GraphNode[] = [
  { id: "n-def", x: 210, y: 148, cluster: "nitrogen", primary: true },
  { id: "chlorosis", x: 78, y: 64, cluster: "nitrogen" },
  { id: "older-leaves", x: 54, y: 168, cluster: "nitrogen" },
  { id: "low-n", x: 118, y: 262, cluster: "nitrogen" },
  { id: "roots", x: 268, y: 268, cluster: "nitrogen" },
  { id: "waterlog", x: 338, y: 186, cluster: "nitrogen" },
  { id: "sulfur", x: 326, y: 72, cluster: "nitrogen" },
  { id: "septoria", x: 560, y: 150, cluster: "septoria", primary: true },
  { id: "wheat", x: 470, y: 58, cluster: "septoria" },
  { id: "humidity", x: 670, y: 54, cluster: "septoria" },
  { id: "rainfall", x: 708, y: 168, cluster: "septoria" },
  { id: "lesions", x: 650, y: 268, cluster: "septoria" },
  { id: "stage", x: 480, y: 262, cluster: "septoria" },
];

export const knowledgeGraphEdges: readonly GraphEdge[] = [
  { from: "n-def", to: "chlorosis" },
  { from: "n-def", to: "older-leaves" },
  { from: "n-def", to: "low-n" },
  { from: "n-def", to: "roots" },
  { from: "n-def", to: "waterlog" },
  { from: "n-def", to: "sulfur" },
  { from: "septoria", to: "wheat" },
  { from: "septoria", to: "humidity" },
  { from: "septoria", to: "rainfall" },
  { from: "septoria", to: "lesions" },
  { from: "septoria", to: "stage" },
];

export const inputModalityIds = [
  "photos",
  "field-data",
  "weather",
  "soil",
  "satellite",
  "drones",
  "expert",
  "outcomes",
] as const;

export type InputModalityId = (typeof inputModalityIds)[number];

export const diagnosisCauses = [
  { id: "nitrogen", confidence: 0.78 },
  { id: "sulfur", confidence: 0.31 },
  { id: "waterlogging", confidence: 0.18 },
] as const;

export const diagnosisTests = ["tissue", "nitrate", "canopy"] as const;

export const agronomistReview = {
  aiConfidence: 0.81,
} as const;

export const regionIds = ["ukraine", "kansas", "argentina", "france"] as const;

export const geographyFilters = [
  "region",
  "climate",
  "soil",
  "crop",
  "cultivar",
  "growthStage",
  "regulation",
] as const;

export const predictiveModules = [
  { id: "disease", kind: "range" },
  { id: "moisture", kind: "range" },
  { id: "yield", kind: "value" },
  { id: "anomalies", kind: "value" },
] as const;

export const dronePipelineIds = [
  "flight",
  "geotagged",
  "orthomosaic",
  "segmentation",
  "anomaly",
  "samples",
  "interpretation",
  "zones",
] as const;

export const vegetationIndices = ["NDVI", "NDRE", "GNDVI", "VARI"] as const;

export const intelligenceStepIds = [
  "observe",
  "understand",
  "decide",
  "act",
  "measure",
  "learn",
] as const;

export const contextInputIds = [
  "imagery",
  "weather",
  "soil",
  "cropStage",
  "fieldHistory",
  "agronomy",
  "interventions",
  "outcomes",
] as const;

export const userGroupIds = [
  "agronomists",
  "operators",
  "companies",
  "researchers",
] as const;

export const architectureLimits = [
  "resets",
  "generic",
  "noModel",
  "noOutcomes",
] as const;

export const architecturePath = [
  "field",
  "history",
  "observation",
  "knowledge",
  "decision",
  "action",
  "outcome",
  "learning",
] as const;

export const outcomeLoop = [
  "recommendation",
  "farmerAction",
  "fieldResponse",
  "outcome",
  "futureDecision",
] as const;

export const agronomistPoints = [
  "datasets",
  "evaluation",
  "retrieval",
  "models",
] as const;

export const roles = [
  "farmer",
  "agronomist",
  "researcher",
  "agCompany",
  "investor",
  "technologyPartner",
  "other",
] as const;

export type Role = (typeof roles)[number];
