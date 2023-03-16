import EmailSuccess from "components/alerter/EmailSuccess";
import EmailFormInscription from "components/inscription/EmailFormInscription";
import usePostEmail from "hooks/usePostEmail";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const Inscription = () => {
    const router = useRouter();
    const [userEntite, setUserEntite] = useState({ code: "", libelle: "" });
    const { code, libelle } = userEntite;
    const [userEmail, setUserEmail] = useState("");
    const {
        mutate: postEmail,
        isSuccess: postEmailSuccess,
        isLoading: postEmailIsLoading,
    } = usePostEmail(userEmail, code, libelle);

    return (
        <>
            <Head>
                <title>
                    Inscrivez-vous pour être alerté de la publication de vos
                    dotations.
                </title>
            </Head>
            <div className="py-10 sm:py-20 mx-auto w-5/6 sm:w-4/6 lg:w-1/2">
                {postEmailSuccess ? (
                    <EmailSuccess
                        userEmail={userEmail}
                        textLink="Visiter le site Dotations Locales"
                        onClickLink={() => {
                            router.push("/");
                        }}
                    />
                ) : (
                    <EmailFormInscription
                        postEmail={postEmail}
                        userEmail={userEmail}
                        setUserEmail={setUserEmail}
                        postEmailIsLoading={postEmailIsLoading}
                        userEntite={userEntite}
                        setUserEntite={setUserEntite}
                    />
                )}
            </div>
        </>
    );
};

export default Inscription;
