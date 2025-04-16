import { createTranslation } from "@/utils/localization/server";
import type { LocaleTypes } from "@/utils/localization/settings";
import Test from "@/containers/test";
export default async function Page({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await createTranslation(locale, "common");

  return (
    <>
      <div>{t("home")}</div>
      <Test />
    </>
  );
}
