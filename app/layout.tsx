import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import {ThemeProvider} from "@/components/providers/ThemeProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] });


export const metadata: Metadata = {
  title: "Obed Effum",
  description: "Obed Effum's portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          className={`${poppins.className} h-full antialiased`}
          suppressHydrationWarning
      >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <Toaster position="top-center" duration={5000} richColors theme="system" />
        </ThemeProvider>
      </body>
      </html>
  );
}