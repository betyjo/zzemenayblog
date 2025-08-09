"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    // Remove current locale prefix if present
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "fr") {
      segments.shift();
    }
    // Add new locale prefix
    const newPath = `/${lang}/${segments.join("/")}`;
    router.push(newPath);
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={pathname.startsWith("/fr") ? "fr" : "en"}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}
