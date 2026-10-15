import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/lib/site";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Obed Effum",
    "full stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "Laravel developer",
    "web application developer",
    "software engineer portfolio",
  ],
  category: "technology",
  // `alternates` and `robots` live on app/page.tsx, not here: metadata set in
  // the root layout also applies to app/not-found.tsx, and a 404 should not
  // advertise a canonical or an "index, follow" directive.
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  // Dark is the default theme regardless of OS preference; light is opt-in.
  themeColor: "#1c2225",
  colorScheme: "dark light",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          className={`${mono.variable} antialiased`}
          suppressHydrationWarning
      >
      <body>
        <ThemeProvider>
          {children}
          <Toaster position="top-right" duration={5000} />
        </ThemeProvider>
      </body>
      </html>
  );
}
