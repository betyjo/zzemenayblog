import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr'],       // English and French
    defaultLocale: 'en',         // Default language is English
  },
  // other config options...
};

export default nextConfig;
