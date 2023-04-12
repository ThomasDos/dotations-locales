import { Badge } from "@dataesr/react-dsfr";
import { Checkbox } from "@mui/material";
import { Button } from "components/ui";
import Input from "components/ui/Input";
import Link from "next/link";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import SearchInputInscription from "./SearchInputInscription";

const StyledTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
    margin-top: 24px;

    @media (min-width: 640px) {
        line-height: 48px;
        font-size: 40px;
    }
`;

const StyledTitleInput = styled.h3`
    all: unset;
    font-size: 18px;
    font-weight: 700;
`;

const StyledInputContainer = styled.div`
    margin: 8px 0;
    display: flex;
    flex-direction: column;
`;

interface EmailFormProps {
    postEmail(email: string): void;
    userEmail: string;
    setUserEmail(email: string): void;
    postEmailIsLoading: boolean;
    userEntite: { code: string; libelle: string };
    setUserEntite(entite: { code: string; libelle: string }): void;
}

export default function EmailFormInscription({
    postEmail,
    userEmail,
    setUserEmail,
    postEmailIsLoading,
    userEntite,
    setUserEntite,
}: EmailFormProps) {
    const [isChecked, setIsChecked] = useState(false);
    const [tryToSubmit, setTryToSubmit] = useState(false);

    const valideUserEmail = useMemo(
        () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail),
        [userEmail]
    );

    const handleSubmit = () => {
        setTryToSubmit(true);
        if (!isChecked) {
            return toast.error("Merci de d'accepter les conditions");
        }

        if (!valideUserEmail) {
            return toast.error("Votre email est invalide");
        }

        if (!userEntite.code || !userEntite.libelle) {
            return toast.error("Merci de sélectionner votre collectivité");
        }

        postEmail(userEmail);
    };

    return (
        <div className="max-w-2xl m-auto">
            <div className="flex flex-col items-center mb-6">
                <Badge text="inscription" type="info" />
                <StyledTitle>
                    Inscrivez-vous pour être averti de toute nouveauté sur la
                    plateforme.
                </StyledTitle>
            </div>
            <StyledInputContainer>
                <StyledTitleInput>Votre Email</StyledTitleInput>
                <Input
                    value={userEmail}
                    setValue={setUserEmail}
                    placeholder="Votre adresse électronique (ex. : nom@domaine.fr)"
                    className="my-4"
                    isError={!valideUserEmail}
                />
            </StyledInputContainer>
            <StyledInputContainer>
                <StyledTitleInput>Votre collectivité</StyledTitleInput>
                {userEntite.libelle ? (
                    <div className="flex justify-between py-2 items-center">
                        <span>
                            {userEntite.libelle} ({userEntite.code})
                        </span>
                        <div
                            className="bg-grey-975 p-1 cursor-pointer"
                            onClick={() => {
                                setUserEntite({ code: "", libelle: "" });
                            }}
                        >
                            Changer de collectivité
                        </div>
                    </div>
                ) : (
                    <SearchInputInscription setUserEntite={setUserEntite} />
                )}
            </StyledInputContainer>

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
                    <Link href="/cgu" target="_">
                        Consulter notre politique de confidentialité
                    </Link>
                </span>
            </div>

            {!isChecked && tryToSubmit && (
                <div className="text-sm text-error-425 text-center">
                    Merci de cocher la case de votre consentement ci-dessus
                </div>
            )}

            <div className="w-max m-auto">
                <Button
                    text="Je m'abonne"
                    onClick={handleSubmit}
                    isLoading={postEmailIsLoading}
                />
            </div>
        </div>
    );
}
