import "@/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import Image from "next/image";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="relative min-h-screen flex flex-col overflow-hidden">
            
            {/* Background image */}
            <Image
              src="/AmineJobsBG.jpg"
              alt="Background"
              fill
              priority
              className="object-cover z-0"
            />

            {/* Transparent overlay over ALL background */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10" />

            {/* Main content */}
            <main className="z-20 mx-auto max-w-7xl px-6 flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="relative z-20 w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://portfolio-rho-brown-aosm4qjgn0.vercel.app/en"
                title="mohamed amine portfolio"
              >
                <span className="text-default-600">Developed by</span>
                <p className="text-primary">Mohamed Amine LAZREG</p>
              </Link>
            </footer>

          </div>
        </Providers>
      </body>
    </html>
  );
}
