import Image from "next/image";
import styled from "styled-components";

const StyledMerci = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: var(--blue-france-113);
`;

const StyledValidationText = styled.div`
    color: var(--grey-200-850);
`;
const StyledRetour = styled.div`
    color: var(--blue-france-113);
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
`;

interface EmailSuccessProps {
    postEmailReset(): void;
    setUserEmail(email: string): void;
}
export default function EmailSuccess({
    postEmailReset,
    setUserEmail,
}: EmailSuccessProps) {
    const handleReset = () => {
        setUserEmail("");
        postEmailReset();
    };

    return (
        <div className="text-center">
            <div className="min-w-[65px] min-h-[72px] flex justify-center select-none">
                <Image
                    src="/icons/email-success.svg"
                    width={65}
                    height={72}
                    alt="icone de l'email correctement enregistré"
                />
            </div>
            <StyledMerci className="my-4">Merci</StyledMerci>
            <StyledValidationText className="mb-4 text-lg">
                <div>Inscription transmise</div>
                <div>Surveillez votre messagerie</div>
            </StyledValidationText>
            <StyledRetour onClick={handleReset}>retour</StyledRetour>
        </div>
    );
}
