import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <meta charSet="utf-8" />

                <meta name="theme-color" content="#000091" />
                <link
                    rel="apple-touch-icon"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    href="/favicon/favicon.svg"
                    type="image/svg+xml"
                />
                <link
                    rel="shortcut icon"
                    href="/favicon/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="manifest"
                    href="/favicon/manifest.webmanifest"
                    crossOrigin="use-credentials"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
