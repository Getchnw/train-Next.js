import "./globals.css";
import Navbar from "@/component/Navbar";
import type { ReactNode } from "react";
import { Metadata } from "next";

{/*Metadata คือ คำอธิบายของเว็บไซต*/ }
export const metadata: Metadata = {
  title: "My Next.js Site",
  description: "This is my Next.js site",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS"],
  
}


function Layout({ children } : {children: React.ReactNode}) {
      return (
        <html>
          <body>
            <Navbar />
            {children}
          </body>
        </html>
      );
}

export default Layout;