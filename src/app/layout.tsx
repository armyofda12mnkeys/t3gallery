import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import {ClerkProvider} from "@clerk/nextjs";


import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TopNav } from "./_components/topnav";


export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated by arian hojat",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};





export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
