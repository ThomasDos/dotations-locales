import "styles/dsfr.local-overwrite.css";
import "styles/globals.css";
import "styles/variables.css";

import { init as matomoInit } from "@socialgouv/matomo-next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "components/app";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { hotjar } from "react-hotjar";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store/index";

const AppWrapper = ({ Component, pageProps, router }: AppProps) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: false,
                    },
                },
            })
    );

    useEffect(() => {
        if (process.env.NODE_ENV !== "development") {
            const matomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
            const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL;
            const hotjarId = process.env.NEXT_PUBLIC_APP_HOTJAR;

            if (hotjarId) {
                hotjar.initialize(
                    Number(process.env.NEXT_PUBLIC_APP_HOTJAR),
                    6,
                    false
                );
            }
            if (matomoSiteId && matomoUrl) {
                matomoInit({
                    excludeUrlsPatterns: [/^localhost:.+/g],
                    siteId: matomoSiteId,
                    url: matomoUrl,
                });
            }
        }
    }, []);

    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <Head>
                        <title>Dotations Locales</title>
                    </Head>
                    <App
                        Component={Component}
                        pageProps={pageProps}
                        router={router}
                    />
                    <Toaster containerStyle={{ textAlign: "center" }} />
                </QueryClientProvider>
            </PersistGate>
        </ReduxProvider>
    );
};

export default AppWrapper;
