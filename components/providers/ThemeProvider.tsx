"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
                                  children,
                              }: {
    children: React.ReactNode;
}) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            // New key so visitors who saved "system" under the old design start on dark
            storageKey="oe-theme"
        >
            {children}
        </NextThemesProvider>
    );
}