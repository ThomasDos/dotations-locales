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
}

export default function EmailForm({
    postEmail,
    userEmail,
    setUserEmail,
    postEmailIsLoading,
    commune,
    codeInsee,
}: EmailFormProps) {
    return (
        <>
            <StyledTitle>S’abonner aux alertes</StyledTitle>
            <EmailInput
                postEmail={postEmail}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                postEmailIsLoading={postEmailIsLoading}
            />
            <div className="text-lg">
                S’abonner aux alertes c’est recevoir des informations concernant
                :
            </div>
            <AlertRowIcon
                text={`Mise à jour de mes dotations (${commune} ${codeInsee})`}
            />
            <AlertRowIcon
                text=" Simulation mes dotations avec les Projets de Lois de
                    Finances (PLF)"
            />
            <AlertRowIcon text="Accès en exclusivité à de nouvelles fonctionnalités" />
        </>
    );
}
