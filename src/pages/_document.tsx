import Nav from '@components/Nav';

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background">
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}