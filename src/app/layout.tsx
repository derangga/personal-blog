import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_10 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey10.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
