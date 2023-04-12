import ImageFixed from "components/ui/ImageFixed";
import styled from "styled-components";

const StyledMerci = styled.div`
    font-size: 40px;
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
    text-decoration: underline;
`;

interface EmailSuccessProps {
    textLink: string;
    onClickLink(): void;
    userEmail: string;
}
export default function EmailSuccess({
    textLink,
    onClickLink,
    userEmail,
}: EmailSuccessProps) {
    return (
        <div className="text-center">
            <ImageFixed
                className="select-none flex justify-center"
                src="/icons/email-success.svg"
                width={65}
                height={72}
                alt="icone de l'email correctement enregistré"
            />
            <StyledMerci className="my-4">Bienvenue parmi nous !</StyledMerci>
            <StyledValidationText className="mb-6">
                <div className="font-bold my-6 text-lg">
                    Nous sommes heureux de vous accueillir parmi nos
                    utilisateurs
                </div>
                <div>
                    Pour finaliser votre inscription, il vous suffit de cliquer
                    sur le lien de confirmation qui se trouve dans l&apos;email
                    que nous venons d&apos;envoyer à : <u>{userEmail}</u>
                </div>
            </StyledValidationText>
            <StyledRetour onClick={onClickLink}>{textLink}</StyledRetour>
        </div>
    );
}
