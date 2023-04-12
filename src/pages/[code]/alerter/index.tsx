import EmailForm from "components/alerter/EmailForm";
import EmailSuccess from "components/alerter/EmailSuccess";
import { SubHeader } from "components/dashboard";
import usePostEmail from "hooks/usePostEmail";
import Head from "next/head";
import router from "next/router";
import { useEffect, useState } from "react";

export default function Alerter() {
    const { libelle, code } = router.query as {
        libelle: string;
        code: string;
    };

    const [userEmail, setUserEmail] = useState("");
    const {
        mutate: postEmail,
        isSuccess: postEmailSuccess,
        isLoading: postEmailIsLoading,
        isError: postEmailIsError,
        reset: postEmailReset,
    } = usePostEmail(userEmail, code, libelle);

    useEffect(() => {
        if (!libelle || !code) {
            router.push("/");
        }
    }, []);

    return (
        <>
            <Head>
                <title>Être alerté sur les changements de vos dotations</title>
            </Head>
            <SubHeader libelle={libelle} code={code} />
            <div className="py-10 sm:py-20 mx-auto w-5/6 sm:w-4/6 lg:w-1/2">
                {postEmailSuccess ? (
                    <EmailSuccess
                        userEmail={userEmail}
                        textLink="Retour"
                        onClickLink={() => {
                            setUserEmail("");
                            postEmailReset();
                        }}
                    />
                ) : (
                    <EmailForm
                        postEmail={postEmail}
                        userEmail={userEmail}
                        setUserEmail={setUserEmail}
                        postEmailIsLoading={postEmailIsLoading}
                        postEmailIsError={postEmailIsError}
                    />
                )}
            </div>
        </>
    );
}
