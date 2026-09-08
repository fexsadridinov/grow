import { useTranslations } from "next-intl";
import { userGroupIds } from "@/data/knowledge";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function UserGroups() {
  const t = useTranslations("userGroups");

  return (
    <Section id="users">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      </Reveal>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {userGroupIds.map((group, index) => (
          <article
            key={group}
            className="min-h-[220px] min-w-0 rounded-xl border border-ink/10 bg-paper p-7 sm:p-8"
          >
            <p className="font-mono text-[11px] tracking-[0.16em] text-olive">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-6 text-2xl tracking-[-0.04em]">
              {t(`items.${group}.title`)}
            </h3>
            <p className="mt-4 max-w-md text-[16px] leading-7 text-ink/70">
              {t(`items.${group}.copy`)}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
