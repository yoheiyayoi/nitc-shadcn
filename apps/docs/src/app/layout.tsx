import { Google_Sans, Inter } from "next/font/google";

import { Provider } from "@/components/provider";

import "./global.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const googleSans = Google_Sans({
  subsets: ["thai"],
  variable: "--font-thai",
});

export const metadata: Metadata = {
  title: {
    template: "%s - NITC",
    default: "NITC",
  },
  description:
    "nit-components is a collection of shadcn/ui components for ntuniso projects by yohei_yayoi!",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${googleSans.className}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Provider>
          <SiteHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
