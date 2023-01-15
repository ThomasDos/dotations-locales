import { Checkbox, FormControlLabel } from "@mui/material";
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
    commune: string;
    codeInsee: string;
    postEmailIsError: boolean;
}

export default function EmailForm({
    postEmail,
    userEmail,
    setUserEmail,
    postEmailIsLoading,
    commune,
    codeInsee,
    postEmailIsError,
}: EmailFormProps) {
    const [isChecked, setIsChecked] = useState(false);
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
            />
            <FormControlLabel
                label="En cochant cette case, vous acceptez les conditions générales"
                control={
                    <Checkbox
                        checked={isChecked}
                        onChange={e => setIsChecked(e.target.checked)}
                    />
                }
            />
            <div className="text-lg">
                S’abonner aux alertes c’est recevoir des informations concernant
                :
            </div>
            <AlertRowIcon
                text={`Mise à jour de mes dotations (${commune} ${codeInsee})`}
            />
            <AlertRowIcon
                text="Simulation mes dotations avec les Projets de Lois de
                    Finances (PLF)"
            />
            <AlertRowIcon text="Accès en exclusivité à de nouvelles fonctionnalités" />
        </>
    );
}
