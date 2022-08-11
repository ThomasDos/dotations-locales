import "styles/globals.css";
import "styles/variables.css";
import "styles/dsfr.local-overwrite.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "../layouts";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );
    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <title>Dotations Locales</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    );
};

export default MyApp;
