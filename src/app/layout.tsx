import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_10 } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey10 = Jersey_10({
  variable: "--font-jersey-10",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimas Rangga",
  description: "Personal website",
  openGraph: {
    type: "website",
    title: "Dimas Rangga - Software Engineer",
    description:
      "Based in Indonesia, I'm a Software Engineer. I'm passionate about android, web technologies, and building cool stuff.",
    url: "https://derangga-web.vercel.app/",
    siteName: "Dimas Rangga",
    images: [
      {
        url: "https://pbs.twimg.com/media/Gn_7TmwbQAAfnLo?format=jpg",
        width: 1200,
        height: 630,
        alt: "Dimas Rangga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas Rangga",
    description:
      "Based in Indonesia, I'm a Software Engineer. I'm passionate about android, web technologies, and building cool stuff.",
    images: ["https://pbs.twimg.com/media/Gn_7TmwbQAAfnLo?format=jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey10.variable} antialiased`}
      >
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
          <NavigationBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
