import { useLocale } from "next-intl";
import { useCallback } from "react";

export function useLocalHref() {
  const locale = useLocale();
  return useCallback(
    (path: string) => (locale === "vi" ? `/vi${path}` : path),
    [locale]
  );
}
