import "styles/dsfr.local-overwrite.css";
import "styles/globals.css";
import "styles/variables.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { hotjar } from "react-hotjar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store/index";

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

    useEffect(() => {
        hotjar.initialize(3163600, 6);
    }, []);

    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <Head>
                        <title>Dotations Locales</title>
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </QueryClientProvider>
            </PersistGate>
        </ReduxProvider>
    );
};

export default MyApp;
