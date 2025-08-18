import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable : "--font-sans" 
});
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable : "--font-serif" 
});

export const metadata: Metadata = {
  title: "Adolfo Lopez Herrera",
  description: "Data & MLOps Engineer | Personal site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
