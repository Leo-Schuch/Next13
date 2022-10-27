// These styles apply to every route in the application
import "./global.css";
import {Inter} from '@next/font/google'

const inter = Inter();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <head>
        <title>Aprendendo Nextjs 13</title>
        <meta name="description" content="Gerado para criar"/>
      </head>
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
