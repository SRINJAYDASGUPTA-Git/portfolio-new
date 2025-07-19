import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srinjay Dasgupta",

  description: "Full-stack dev by day, ML tinkerer by night.",
  icons: {
    icon: "/favicon-32x32.png",
  },
  keywords: [
    "Srinjay Dasgupta",
    "Srinjay",
    "Dasgupta",
    "Srinjay Dasgupta Portfolio",
    "Srinjay Portfolio",
    "Srinjay Dasgupta Website",
    "Srinjay Website",
    "Srinjay Dasgupta Blog",
    "Srinjay Blog",
    "Srinjay Dasgupta Projects",
    "Srinjay Projects",
    "Srinjay Dasgupta Resume",
    "Srinjay Resume",
    "Srinjay Dasgupta Contact",
    "Srinjay Contact",
    "Srinjay Dasgupta About",
    "Srinjay About",
    "Srinjay Dasgupta Home",
    "Srinjay Home",
    "Srinjay Dasgupta Work",
    "Srinjay Work",
    "Srinjay Dasgupta Experience",
    "Srinjay Experience",
    "Srinjay Dasgupta Skills",
    "Srinjay Skills",
    "Srinjay Dasgupta Education",
    "Srinjay Education",
    "Srinjay Dasgupta Interests",
    "Srinjay Interests",
    "Srinjay Dasgupta Hobbies",
    "Srinjay Hobbies",
    "web developer portfolio",
    "web developer",
    "full-stack developer",
    "full-stack developer portfolio",
    "full-stack developer website",
    "full-stack developer in Kolkata",
    "full-stack developer in India",
    "full-stack developer in West Bengal",
    "web developer in Kolkata",
    "web developer in India",
    "web developer in West Bengal",
    "web developer in Naihati",
    "full-stack developer in Naihati",
    "Top web developer in Kolkata",
    "Top 10 web developer in Kolkata",
    "Java Spring Boot developer",
    "Next.js developer",
    "MERN stack developer",
    "Docker Azure developer",
    "CI/CD with GitHub Actions",
    "student developer portfolio India",
    "BTech CSE AI student portfolio",
    "resume of full-stack developer",
    "portfolio of Srinjay Dasgupta",
    "projects by Srinjay Dasgupta",
    "Narula Institute of Technology student",
    "Hack-o-NiT winner",
    "young Indian developer portfolio"
  ],
  authors: {
    name: "Srinjay Dasgupta",
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
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Srinjay Dasgupta</title>
      <meta name="description" content="Full-stack dev by day, ML tinkerer by night." />
      <meta name="keywords" content="Srinjay Dasgupta, Srinjay Portfolio, web developer portfolio, full-stack developer, Java Spring Boot developer, Next.js developer, Docker Azure developer, student developer India, projects by Srinjay Dasgupta, resume of full-stack developer, Hack-o-NiT winner, MERN stack developer, CI/CD with GitHub Actions, developer in Kolkata, Narula Institute of Technology" />
      <meta name="author" content="Srinjay Dasgupta" />

      {/* Open Graph Meta */}
      <meta property="og:title" content="Srinjay Dasgupta – Full Stack Developer Portfolio" />
      <meta property="og:description" content="Explore the official portfolio of Srinjay Dasgupta – Java backend & full-stack developer with expertise in Spring Boot, Docker, Next.js, and Azure." />
      <meta property="og:url" content="https://www.srinjaydg.in" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:site_name" content="Srinjay Dasgupta Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Srinjay Dasgupta Portfolio" />
      <meta name="twitter:description" content="Explore the official portfolio of Srinjay Dasgupta – full-stack web developer from Kolkata, India." />
      <meta name="twitter:creator" content="@SrinjayDasGupta" />
      <meta name="twitter:image" content="/og-image.jpg" />

      {/* Icons & Web App */}
      <link rel="canonical" href="https://srinjaydg.in" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="Srinjay Dasgupta" />
      <meta name="application-name" content="Srinjay Dasgupta" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Srinjay Dasgupta",
      "url": "https://www.srinjaydg.in",
      "sameAs": [
        "https://www.linkedin.com/in/srinjay-dasgupta-441841214/",
        "https://github.com/SRINJAYDASGUPTA-Git",
        "https://x.com/SrinjayDasGupta"
      ],
      "jobTitle": "Full-Stack Developer"
    }
  ` }} />
    </Head>
`
    <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZJ039QLND8"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZJ0J9QLND8');
            `,
          }}
        />
      </body>
    </html>
  );
}
