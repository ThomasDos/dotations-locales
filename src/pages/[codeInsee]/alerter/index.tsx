import { SubHeader } from "components/dashboard";
import usePostEmail from "hooks/usePostEmail";
import router from "next/router";
import { useEffect, useState } from "react";
import EmailForm from "./EmailForm";
import EmailSuccess from "./EmailSuccess";

export default function Alerter() {
    const { commune, codeInsee } = router.query as {
        commune: string;
        codeInsee: string;
    };

    const [userEmail, setUserEmail] = useState("");
    const {
        mutateAsync: postEmail,
        isSuccess: postEmailSuccess,
        isLoading: postEmailIsLoading,
        reset: postEmailReset,
    } = usePostEmail(userEmail);

    useEffect(() => {
        if (!commune || !codeInsee) {
            router.push("/");
        }
    }, []);

    return (
        <>
            <SubHeader commune={commune} codeInsee={codeInsee} />
            <div className="py-10 sm:py-20 mx-auto w-5/6 sm:w-4/6 lg:w-1/2">
                {postEmailSuccess ? (
                    <EmailSuccess
                        postEmailReset={postEmailReset}
                        setUserEmail={setUserEmail}
                    />
                ) : (
                    <EmailForm
                        postEmail={postEmail}
                        userEmail={userEmail}
                        setUserEmail={setUserEmail}
                        postEmailIsLoading={postEmailIsLoading}
                        commune={commune}
                        codeInsee={codeInsee}
                    />
                )}
            </div>
        </>
    );
}
