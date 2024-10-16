import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs";

export const metadata: Metadata = {
  title: "WorkOS Auth Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthKitProvider>
        <body className="antialiased">
          <Header />
          {children}
        </body>
      </AuthKitProvider>
    </html>
  );
}
