import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata = {
    title: "Chat App",
    description: "Chatovací aplikace, vytvořil Klimondra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">

      <body
        className={`${hostGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}