import type { Metadata, Viewport } from "next";
import { Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "FalconSmoke | عالم الأرجيلة والمعسل الفاخر",
  description:
    "فالكون سموك في مخيم الشهيد — معسل، فحم، أراجيل ومستلزمات تدخين مختارة بعناية.",
  keywords: [
    "FalconSmoke",
    "فالكون سموك",
    "معسل",
    "أراجيل",
    "فحم",
    "مستلزمات التدخين",
  ],
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${alexandria.variable} ${ibmArabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}