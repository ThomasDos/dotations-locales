import "../styles/globals.css";
import "../styles/variables.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../layout";

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>my firsts page</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default MyApp;
