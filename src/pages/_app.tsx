import "styles/dsfr.local-overwrite.css";
import "styles/globals.css";
import "styles/variables.css";

import { init as matomoInit } from "@socialgouv/matomo-next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
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
        const matomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? "";
        const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL ?? "";

        //@ts-ignore
        window.Tally?.openPopup(process.env.NEXT_PUBLIC_API_TALLY, {
            autoClose: 3000,
            doNotShowAfterSubmit: true,
            emoji: {
                animation: "wave",
                text: "👋",
            },
        });

        hotjar.initialize(Number(process.env.NEXT_PUBLIC_APP_HOTJAR), 6);
        matomoInit({
            excludeUrlsPatterns: [/^localhost:.+/g],
            siteId: matomoSiteId,
            url: matomoUrl,
        });
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
                    <Toaster containerStyle={{ textAlign: "center" }} />
                </QueryClientProvider>
            </PersistGate>
        </ReduxProvider>
    );
};

export default MyApp;
