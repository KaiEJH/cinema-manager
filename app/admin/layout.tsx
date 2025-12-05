import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AdminSidebar from "@/components/admin/adminSidebar";
import AdminHeader from "@/components/admin/adminHeader";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdminHeader />
        <AdminSidebar />
        <div className="ml-100">
            {children}
        </div>
      </body>
    </html>
  );
}
