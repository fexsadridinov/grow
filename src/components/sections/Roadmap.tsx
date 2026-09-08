import { useTranslations } from "next-intl";
import { roadmap } from "@/data/roadmap";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Roadmap() {
  const t = useTranslations("roadmap");

  return (
    <Section id="roadmap">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>

      <ol className="mt-14 space-y-0">
        {roadmap.map((group, index) => (
          <li
            key={group.id}
            className="group border-t border-ink/10 py-8 last:border-b"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
              <div className="min-w-0 lg:w-64 lg:shrink-0">
                <p className="tech-label text-olive">
                  {String(index + 1).padStart(2, "0")} · {t(`${group.id}.label`)}
                </p>
                <h3 className="mt-3 text-3xl tracking-[-0.04em]">
                  {t(`${group.id}.label`)}
                </h3>
                <p className="mt-2 text-ink/60">{t(`${group.id}.caption`)}</p>
              </div>
              <ul className="grid min-w-0 flex-1 gap-2 sm:grid-cols-2">
                <RoadmapItems group={group} />
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function RoadmapItems({ group }: { group: (typeof roadmap)[number] }) {
  const t = useTranslations("roadmap");
  const items =
    group.id === "now"
      ? group.items.map((item) => ({ key: item, label: t(`now.items.${item}`) }))
      : group.id === "next"
        ? group.items.map((item) => ({
            key: item,
            label: t(`next.items.${item}`),
          }))
        : group.items.map((item) => ({
            key: item,
            label: t(`later.items.${item}`),
          }));

  return items.map((item) => (
    <li
      key={item.key}
      className="rounded-md border border-ink/10 bg-paper px-4 py-3 text-sm transition-colors duration-500 group-hover:border-ink/18"
    >
      {item.label}
    </li>
  ));
}
