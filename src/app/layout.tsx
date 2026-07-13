import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "One Axis Enterprises | Facility Management Services",
  description: "Premium, reliable facility management and manpower solutions for corporate offices, apartments, hospitals, schools, warehouses, and commercial properties. We Manage. You Focus.",
  keywords: [
    "facility management services",
    "One Axis Enterprises",
    "commercial housekeeping services",
    "manpower solutions India",
    "corporate office security",
    "commercial property maintenance",
    "office supplies",
    "pest control services",
  ],
  metadataBase: new URL("https://oneaxisenterprises.com"),
  openGraph: {
    title: "One Axis Enterprises | Premium Facility Management",
    description: "Reliable manpower and facility management solutions for businesses, apartments, and commercial properties. We Manage. You Focus.",
    url: "https://oneaxisenterprises.com",
    siteName: "One Axis Enterprises",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "One Axis Enterprises Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Axis Enterprises | Facility Management",
    description: "Premium facility management and manpower solutions. We Manage. You Focus.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body 
        className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white font-body"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
