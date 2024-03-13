import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theming/theme-provider"
import "./globals.css";

const fontSans = FontSans({
    weight: ["400", "600", "700"],
    subsets: ["latin", "devanagari"],
    variable: "--font-sans"
})

export const metadata: Metadata = {
    title: "Dashboard / Kellton",
    description: "Uma dashboard desenvolvida com React e Next.JS como solução ao desafio 40 da Codelândia.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="light">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
