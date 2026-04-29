import type { Metadata } from "next";
import { Nunito, Luckiest_Guy, Courier_Prime } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

import "./globals.css";

const nunuto = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: "400",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Artem Zabava",
  description: "Software Development Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunuto.variable} ${luckiestGuy.variable} ${courierPrime.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="top-right"
          offset={24}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "flex items-center gap-3 w-full bg-cream border-4 border-ink rounded-xl shadow p-4 font-primary font-extrabold text-ink",
              title: "text-sm",
              description: "text-xs font-semibold opacity-70",
              success: "bg-cream! text-green!",
              error: "bg-red-light! text-cream!",
              icon: "shrink-0",
            },
          }}
        />
      </body>
      <SpeedInsights />
    </html>
  );
}
