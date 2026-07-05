import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@malahimdev/global-state — live examples",
  description:
    "Verification playground for @malahimdev/global-state: selectors, custom equality, reset, and cross-page state sync.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-1">{children}</main>

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "var(--card)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                borderRadius: "calc(var(--radius) + 4px)",
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                padding: "16px",
              },
              success: {
                style: {
                  borderLeft: "4px solid #22c55e",
                  background:
                    "linear-gradient(to right, rgba(34, 197, 94, 0.1), var(--card))",
                },
                iconTheme: {
                  primary: "#22c55e",
                  secondary: "var(--card)",
                },
              },
              error: {
                style: {
                  borderLeft: "4px solid var(--destructive)",
                  background:
                    "linear-gradient(to right, color-mix(in oklch, var(--destructive) 12%, transparent), var(--card))",
                },
                iconTheme: {
                  primary: "var(--destructive)",
                  secondary: "var(--card)",
                },
              },
              loading: {
                style: {
                  borderLeft: "4px solid var(--primary)",
                  background:
                    "linear-gradient(to right, color-mix(in oklch, var(--primary) 12%, transparent), var(--card))",
                },
                iconTheme: {
                  primary: "var(--primary)",
                  secondary: "var(--card)",
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}