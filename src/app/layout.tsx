import { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  icons: ["../../ms-logo.png"],
  title: "Martin Štefánek",
  description: "Ruční výroba. Sklárna. Umělecké sklo Užitkové sklo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="cz">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
