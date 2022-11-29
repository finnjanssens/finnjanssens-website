/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="Author" content="Finn Janssens" key="author" />
        <meta
          name="description"
          content="Hi! I’m Finn, a student Multimedia and Creative Technology at Erasmus Colleges Brussels. I’m passionate about creating and love anything technology-related. During my education in Multimedia and Creative Technology I’ve grown a big interest for the front-end, the back-end and everything in between."
        />
        <title>Finn Janssens | Portfolio</title>
      </Head>
      <body>
        <main>
          {/* <nav></nav> */}
          {children}
        </main>
      </body>
    </html>
  );
}
