import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Lightweight and Embeddable Bitcoin Client",
  description: "A lightweight and embeddable Bitcoin client designed for full validation, sovereignty, and easy integration into applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const root = document.documentElement;
                  
                  if (theme === 'dark') {
                    root.classList.add('dark');
                  } else if (theme === 'light') {
                    root.classList.add('light');
                  } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (prefersDark) {
                      root.classList.add('dark');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
