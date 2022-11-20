import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Dotations Locales a pour vocation de construire avec les territoires un moyen d'estimer le montant de dotations de l'État en associant la connaissance que chaque territoire a de lui-même, les textes réglementaires modélisés ainsi que les données du calcul des dotations locales publiées en open data par la Direction Régionale des Collectivités Locales."
                />
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
                <script async src="https://tally.so/widgets/embed.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
