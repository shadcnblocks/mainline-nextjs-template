import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Svenska Hem | Kvalitetsboende i Stockholm",
    template: "%s | Svenska Hem",
  },
  description:
    "Svenska Hem bygger och förvaltar unika lägenheter med kvadratsmarta planlösningar i Stockholmsområdet. Familjeägt sedan 1990.",
  keywords: [
    "hyresrätter Stockholm",
    "bostadsrätter Stockholm",
    "lägenheter Stockholm",
    "Svenska Hem",
    "fastighetsbolag Stockholm",
    "nyproduktion bostäder",
    "hyra lägenhet Stockholm",
    "kvalitetsboende",
    "kvadratsmarta planlösningar",
  ],
  authors: [{ name: "Svenska Hem" }],
  creator: "Svenska Hem",
  publisher: "Svenska Hem",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Svenska Hem | Kvalitetsboende i Stockholm",
    description:
      "Svenska Hem bygger och förvaltar unika lägenheter med kvadratsmarta planlösningar i Stockholmsområdet. Familjeägt sedan 1990.",
    siteName: "Svenska Hem",
    locale: "sv_SE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Svenska Hem - Kvalitetsboende i Stockholm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Svenska Hem | Kvalitetsboende i Stockholm",
    description:
      "Svenska Hem bygger och förvaltar unika lägenheter med kvadratsmarta planlösningar i Stockholmsområdet.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
