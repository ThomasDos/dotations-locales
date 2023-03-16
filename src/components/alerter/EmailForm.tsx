import { Checkbox } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import AlertRowIcon from "./AlertRowIcon";
import EmailInput from "./EmailInput";

const StyledTitle = styled.div`
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
`;

interface EmailFormProps {
    postEmail(email: string): void;
    userEmail: string;
    setUserEmail(email: string): void;
    postEmailIsLoading: boolean;
    libelle: string;
    code: string;
    postEmailIsError: boolean;
}

export default function EmailForm({
    postEmail,
    userEmail,
    setUserEmail,
    postEmailIsLoading,
    libelle,
    code,
    postEmailIsError,
}: EmailFormProps) {
    const [isChecked, setIsChecked] = useState(false);
    const [tryToSubmit, setTryToSubmit] = useState(false);
    return (
        <>
            <StyledTitle>S’abonner aux alertes</StyledTitle>
            <EmailInput
                postEmail={postEmail}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                postEmailIsLoading={postEmailIsLoading}
                postEmailIsError={postEmailIsError}
                isChecked={isChecked}
                setTryToSubmit={setTryToSubmit}
            />
            {!isChecked && tryToSubmit && (
                <div className="text-sm text-error-425">
                    Merci de cocher la case de votre consentement ci-dessous
                </div>
            )}

            <div className="flex my-6">
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
                    <Link
                        href="https://www.economie.gouv.fr/politique-confidentialite"
                        target="_"
                    >
                        Consulter notre politique de confidentialité
                    </Link>
                </span>
            </div>

            <div className="text-lg">
                S’abonner aux alertes c’est recevoir des informations concernant
                :
            </div>
            <AlertRowIcon
                text={`Mise à jour de mes dotations (${libelle} ${code})`}
            />
            <AlertRowIcon
                text="Simulation de mes dotations avec les Projets de Lois de
                    Finances (PLF)"
            />
            <AlertRowIcon text="Accès en exclusivité à de nouvelles fonctionnalités" />
        </>
    );
}
