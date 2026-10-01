import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arunima Deval",
  description: "Researcher and investor at UC Berkeley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.variable} h-full`}>
      <body className="min-h-full bg-[#FDFCF8] text-stone-900 antialiased font-[family-name:var(--font-garamond)]">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3KFEW3Z45N" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3KFEW3Z45N');
        `}</Script>
      </body>
    </html>
  );
}
