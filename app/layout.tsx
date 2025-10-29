import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Yessica García Fotografía",
    default: "Yessica García | Fotografía Profesional",
  },
  description: "Portafolio de fotografía de retrato, eventos y producto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
