import styled from "styled-components";

const StyledSearchInput = styled.div<{ isError?: boolean }>`
    border-bottom: ${({ isError }) =>
        `2px solid var(--${
            isError ? "error-425" : "blue-france-sun-113-625"
        })`};
    width: 100%;
    @media (min-width: 768px) {
        width: 83%;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    background: var(--grey-950);
    color: var(--grey-425);
    font-style: italic;
    :focus {
        outline: none;
    }
`;

interface EmailInputProps {
    userEmail: string;
    setUserEmail(email: string): void;
    postEmailIsError: boolean;
    valideUserEmail: boolean;
}

export default function EmailInput({
    userEmail,
    setUserEmail,
    postEmailIsError,
    valideUserEmail,
}: EmailInputProps) {
    return (
        <StyledSearchInput
            className="mt-8"
            isError={postEmailIsError || !valideUserEmail}
        >
            <StyledInput
                autoFocus
                type="text"
                placeholder="Votre adresse électronique (ex. : nom@domaine.fr)"
                className="pl-4 py-3"
                value={userEmail}
                onChange={e => {
                    setUserEmail(e.target.value);
                }}
            />
        </StyledSearchInput>
    );
}
