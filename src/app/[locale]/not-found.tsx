import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  const cta = await getTranslations("cta");

  return (
    <main
      id="main"
      className="mx-auto flex min-h-[60vh] w-full max-w-[1440px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-lg">
        <p className="tech-label text-olive">404</p>
        <h1 className="mt-4 text-4xl tracking-[-0.04em]">{t("title")}</h1>
        <p className="mt-4 text-ink/70">{t("body")}</p>
        <div className="mt-8">
          <Button href="/">{cta("returnHome")}</Button>
        </div>
      </div>
    </main>
  );
}
