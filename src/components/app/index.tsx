import useFetchInit from "hooks/useFetchInit";
import { AppProps } from "next/app";
import Layout from "src/layouts";

const App = ({ Component, pageProps, router }: AppProps) => {
    useFetchInit();

    return (
        <Layout>
            <Component {...pageProps} router={router} />
        </Layout>
    );
};

export default App;
