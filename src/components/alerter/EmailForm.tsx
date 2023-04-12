import { Checkbox } from "@mui/material";
import Dots from "components/ui/Dots";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import isValidEmail from "utils/isValidEmail";
import EmailInput from "./EmailInput";

const StyledTitle = styled.div`
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
`;

const StyledSubTitle = styled.div`
    font-weight: 700;
    line-height: 24px;
    text-align: center;
`;

const StyledSearchButton = styled.div`
    background-color: var(--blue-france-sun-113-625);
    border-top-right-radius: 4px;
    gap: 8px;
`;

const StyledSpanButton = styled.span`
    color: var(--blue-france-975);
`;

interface EmailFormProps {
    postEmail(email: string): void;
    userEmail: string;
    setUserEmail(email: string): void;
    postEmailIsLoading: boolean;
    postEmailIsError: boolean;
}

export default function EmailForm({
    postEmail,
    userEmail,
    setUserEmail,
    postEmailIsLoading,
    postEmailIsError,
}: EmailFormProps) {
    const [isChecked, setIsChecked] = useState(false);
    const [tryToSubmit, setTryToSubmit] = useState(false);

    const valideUserEmail = useMemo(
        () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail),
        [userEmail]
    );
    const canSubmit = isChecked && !postEmailIsLoading && valideUserEmail;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) {
            return toast.error("Merci de d'accepter les conditions");
        }
        const emailIsValid = isValidEmail(userEmail);
        if (!emailIsValid) {
            return toast.error("Votre email est invalide");
        }

        postEmail(userEmail);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <StyledTitle>S&apos;abonner aux alertes</StyledTitle>
            <StyledSubTitle>
                Inscrivez-vous pour être averti de toute nouveauté sur la
                plateforme
            </StyledSubTitle>
            <EmailInput
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                postEmailIsError={postEmailIsError}
                valideUserEmail={valideUserEmail}
            />
            {!isChecked && tryToSubmit && (
                <div className="text-sm text-error-425">
                    Merci de cocher la case de votre consentement ci-dessous
                </div>
            )}

            <div className="flex my-6 md:w-5/6 mx-auto">
                <div>
                    <Checkbox
                        checked={isChecked}
                        onChange={e => setIsChecked(e.target.checked)}
                    />
                </div>
                <span>
                    Je consens à ce que mon adresse email soit utilisée afin de
                    recevoir les alertes et informations du service Dotations
                    Locales.{" "}
                    <Link href="/cgu" target="_">
                        Consulter notre politique de confidentialité
                    </Link>
                </span>
            </div>

            <div onClick={() => setTryToSubmit(true)} className="mx-auto mt-2">
                <button type="submit" role="button" disabled={!canSubmit}>
                    <StyledSearchButton className="flex justify-center items-center py-3 px-2 md:px-8">
                        {postEmailIsLoading ? (
                            <Dots />
                        ) : (
                            <StyledSpanButton className="text-sm md:text-xl font-normal">
                                Je m&apos;abonne
                            </StyledSpanButton>
                        )}
                    </StyledSearchButton>
                </button>
            </div>
        </form>
    );
}
