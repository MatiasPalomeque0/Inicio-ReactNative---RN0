import { ScrollViewStyleReset } from 'expo-router/html';
import type { ReactNode } from 'react';

// Configura el HTML raíz utilizado por Expo Router en la versión web.
export default function Root({ children }: { children: ReactNode }) {
  // Mantiene el desplazamiento y el fondo web coherentes con el diseño nativo.
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <ScrollViewStyleReset />

        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
