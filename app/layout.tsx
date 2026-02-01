import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // Adjust path if needed

export const metadata: Metadata = {
  title: "Linear-Clone Circuits | Engineering Innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}