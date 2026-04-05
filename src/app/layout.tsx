import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devify.agency";
const siteName = "Devify®";
const siteDescription =
  "Smart Digital Marketing that turns strategy into growth. We combine strategy, creativity, and performance marketing to help digital brands grow, compete, and scale with confidence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Smart Digital Marketing Agency`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "digital marketing agency",
    "SEO services",
    "content marketing",
    "social media marketing",
    "performance marketing",
    "brand strategy",
    "web design",
    "growth marketing",
    "digital agency",
    "marketing strategy",
    "online marketing",
    "PPC advertising",
    "email marketing",
    "conversion optimization",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} — Smart Digital Marketing Agency`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} — Smart Digital Marketing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Smart Digital Marketing Agency`,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@devifyagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "marketing",
};

export const viewport: Viewport = {
  themeColor: "#1400FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: siteDescription,
  foundingDate: "2020",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 25,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "600",
    bestRating: "5",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@devify.agency",
    availableLanguage: "English",
  },
  sameAs: [
    "https://twitter.com/devifyagency",
    "https://linkedin.com/company/devify",
    "https://instagram.com/devifyagency",
  ],
  offers: {
    "@type": "AggregateOffer",
    description: "Digital marketing services including SEO, content marketing, social media, and performance marketing",
    seller: { "@type": "Organization", name: siteName },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
