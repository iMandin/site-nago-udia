import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capoeira Nagô Udia",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
