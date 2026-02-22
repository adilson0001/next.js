import "./globals.css";

export const metadata = {
  title: "Previsor de Tempo Next",
  description: "Criado com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        {/* Link para os ícones funcionarem em todas as páginas */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        {/* O 'children' é onde o conteúdo do seu page.tsx será renderizado */}
        {children}
      </body>
    </html>
  );
}