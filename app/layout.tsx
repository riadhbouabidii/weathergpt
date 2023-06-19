import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Riadh Nextjs App",
  description:
    "Riadh Nextjs App",
  twitter: {
    card: "summary_large_image",
    title:
      "Riadh Nextjs App",
    description:
      "Riadh Nextjs App",
    creator: "@steventey",
  },
  metadataBase: new URL("https://weathergpt.vercel.app"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
