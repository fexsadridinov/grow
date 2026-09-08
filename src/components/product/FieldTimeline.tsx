"use client";

import { useLocale, useTranslations } from "next-intl";
import type { TimelineEvent } from "@/data/sampleFields";
import { cn, formatObservationDate } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

type FieldTimelineProps = {
  events: readonly TimelineEvent[];
  inverted?: boolean;
  className?: string;
};

export function FieldTimeline({
  events,
  inverted = false,
  className,
}: FieldTimelineProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  return (
    <ol className={cn("relative space-y-0", className)}>
      {events.map((event, index) => (
        <li key={event.id} className="relative flex gap-4 pb-5 last:pb-0">
          <div className="flex w-[6.5rem] shrink-0 flex-col items-start pt-0.5">
            <time
              dateTime={event.date}
              suppressHydrationWarning
              className={cn(
                "font-mono text-[11px] tracking-[0.08em]",
                inverted ? "text-paper/50" : "text-olive",
              )}
            >
              {formatObservationDate(event.date, locale)}
            </time>
          </div>
          <div className="relative flex min-h-[2rem] min-w-0 flex-1 items-start gap-3">
            <span
              className={cn(
                "relative z-10 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                inverted ? "bg-signal" : "bg-forest",
              )}
            />
            {index < events.length - 1 ? (
              <span
                className={cn(
                  "absolute top-3 left-[2.5px] h-full w-px",
                  inverted ? "bg-white/12" : "bg-ink/12",
                )}
                aria-hidden="true"
              />
            ) : null}
            <p
              className={cn(
                "text-[14.5px] leading-6",
                inverted ? "text-paper/85" : "text-ink/80",
              )}
            >
              {t(`fields.timeline.${event.id}`)}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
