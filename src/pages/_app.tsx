import "styles/globals.css";
import "styles/variables.css";
import "styles/dsfr.local-overwrite.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import store from "store/index";

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
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <Head>
                    <title>Dotations Locales</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </QueryClientProvider>
        </ReduxProvider>
    );
};

export default MyApp;
