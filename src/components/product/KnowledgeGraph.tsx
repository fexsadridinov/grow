"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  knowledgeGraphEdges,
  knowledgeGraphNodes,
  type GraphNode,
  type GraphNodeId,
} from "@/data/knowledge";
import { cn, splitDiagramLabel } from "@/lib/utils";

function nodeById(id: GraphNodeId): GraphNode | undefined {
  return knowledgeGraphNodes.find((node) => node.id === id);
}

export function KnowledgeGraph() {
  const t = useTranslations("knowledgeGraph");
  const [active, setActive] = useState<GraphNodeId | null>("n-def");
  const activeNode = active ? nodeById(active) : undefined;
  const related = knowledgeGraphEdges
    .filter((edge) => edge.from === active || edge.to === active)
    .map((edge) => (edge.from === active ? edge.to : edge.from));

  function nodeLabel(id: GraphNodeId): string {
    return t(`nodes.${id}`);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 bg-paper">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/8 px-5 py-4">
        <p className="tech-label text-olive">{t("graphLabel")}</p>
        <p className="text-xs text-ink/45">{t("designedArchitecture")}</p>
      </div>
      <div className="grid lg:grid-cols-[1fr_minmax(200px,260px)]">
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 760 330"
            className="min-h-[280px] w-full min-w-[640px]"
            role="img"
            aria-label={t("alt")}
          >
            {knowledgeGraphEdges.map((edge) => {
              const from = nodeById(edge.from);
              const to = nodeById(edge.to);
              if (!from || !to) {
                return null;
              }
              const lit =
                active == null ||
                edge.from === active ||
                edge.to === active;
              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={lit ? "rgba(23,60,43,0.45)" : "rgba(19,32,25,0.08)"}
                  strokeWidth={lit ? 1.2 : 1}
                />
              );
            })}
            {knowledgeGraphNodes.map((node) => {
              const isActive = node.id === active;
              const isRelated = related.includes(node.id);
              const label = nodeLabel(node.id);
              const lines = splitDiagramLabel(label);
              return (
                <g
                  key={node.id}
                  tabIndex={0}
                  role="button"
                  aria-label={label}
                  onClick={() => setActive(node.id)}
                  onFocus={() => setActive(node.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActive(node.id);
                    }
                  }}
                  className="cursor-pointer"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.primary ? 40 : 32}
                    fill={
                      isActive
                        ? "var(--forest)"
                        : node.cluster === "septoria"
                          ? "var(--panel)"
                          : "var(--canvas)"
                    }
                    stroke={
                      isActive || isRelated
                        ? "var(--forest)"
                        : "rgba(19,32,25,0.14)"
                    }
                    strokeWidth={isActive ? 1.6 : 1}
                  />
                  {lines.map((line, index) => (
                    <text
                      key={line}
                      x={node.x}
                      y={
                        node.y +
                        (lines.length === 1 ? 1 : index === 0 ? -5 : 9)
                      }
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={node.primary ? 9 : 8}
                      fill={isActive ? "#FAFAF7" : "#132019"}
                      fontFamily="var(--font-manrope), system-ui, sans-serif"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}
          </svg>
        </div>
        <aside className="min-w-0 border-t border-ink/8 p-5 lg:border-l lg:border-t-0">
          <p className="tech-label text-olive">{t("selectedNode")}</p>
          <p className="mt-3 text-lg tracking-[-0.03em]">
            {activeNode ? nodeLabel(activeNode.id) : t("selectNode")}
          </p>
          <p className="mt-3 text-sm leading-6 text-ink/65">
            {activeNode?.cluster === "nitrogen"
              ? t("nitrogenCopy")
              : t("septoriaCopy")}
          </p>
          {related.length > 0 ? (
            <ul className="mt-4 space-y-1.5">
              {related.map((id) => (
                <li key={id} className={cn("text-sm text-ink/70")}>
                  {nodeLabel(id)}
                </li>
              ))}
            </ul>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
