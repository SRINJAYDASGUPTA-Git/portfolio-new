import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srinjay Das Gupta",
  description: "Full-stack dev by day, ML tinkerer by night.",
  icons: {
    icon: "/favicon-32x32.png",
  },
  keywords: [
    "Srinjay Das Gupta",
    "Srinjay",
    "Das Gupta",
    "Srinjay Das Gupta Portfolio",
    "Srinjay Portfolio",
    "Srinjay Das Gupta Website",
    "Srinjay Website",
    "Srinjay Das Gupta Blog",
    "Srinjay Blog",
    "Srinjay Das Gupta Projects",
    "Srinjay Projects",
    "Srinjay Das Gupta Resume",
    "Srinjay Resume",
    "Srinjay Das Gupta Contact",
    "Srinjay Contact",
    "Srinjay Das Gupta About",
    "Srinjay About",
    "Srinjay Das Gupta Home",
    "Srinjay Home",
    "Srinjay Das Gupta Work",
    "Srinjay Work",
    "Srinjay Das Gupta Experience",
    "Srinjay Experience",
    "Srinjay Das Gupta Skills",
    "Srinjay Skills",
    "Srinjay Das Gupta Education",
    "Srinjay Education",
    "Srinjay Das Gupta Interests",
    "Srinjay Interests",
    "Srinjay Das Gupta Hobbies",
    "Srinjay Hobbies",
    "Srinjay Das Gupta Projects",
    "Srinjay Projects",
    "Srinjay Das Gupta Contact",
    "Srinjay Contact",
    "Srinjay Das Gupta About",
    "Srinjay About",
    "Srinjay Das Gupta Home",
    "Srinjay Home",
    "Srinjay Das Gupta Work",
    "Srinjay Work",
    "Srinjay Das Gupta Experience",
    "Srinjay Experience",
    "Srinjay Das Gupta Skills",
    "Srinjay Skills",
    "Srinjay Das Gupta Education",
    "Srinjay Education",
    "Srinjay Das Gupta Interests",
    "Srinjay Interests",
    "Srinjay Das Gupta Hobbies",
    "Srinjay Hobbies",
    "Srinjay Das Gupta Projects",
    "Srinjay Projects",
    "Srinjay Das Gupta Contact",
    "Srinjay Contact",
    "Srinjay Das Gupta About",
    "Srinjay About",
    "Srinjay Das Gupta Home",
    "web developer portfolio",
    "web developer",
    "full-stack developer",
    "full-stack developer portfolio",
    "full-stack developer website",
    "full-stack developer in kolkata",
    "full-stack developer in india",
    "full-stack developer in west bengal",
    "web developer in kolkata",
    "web developer in india",
    "web developer in west bengal",
    "web developer in naihati",
    "full-stack developer in naihati",

    "Top web developer in kolkata",
    "Top 10 web developer in kolkata",
  ],
  authors: {
    name: "Srinjay Das Gupta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://srinjaydg.in" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
