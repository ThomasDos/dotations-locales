import Dots from "components/ui/Dots";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import isValidEmail from "utils/isValidEmail";

const StyledSearchButton = styled.div`
    background-color: var(--blue-france-sun-113-625);
    border-top-right-radius: 4px;
    gap: 8px;
`;

const StyledSearchInput = styled.div<{ isError?: boolean }>`
    border-bottom: ${({ isError }) =>
        `2px solid var(--${
            isError ? "error-425" : "blue-france-sun-113-625"
        })`};
`;

const StyledSpanButton = styled.span`
    color: var(--blue-france-975);
`;
const StyledInput = styled.input`
    flex: 1;
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
    postEmail(email: string): void;
    postEmailIsLoading: boolean;
    postEmailIsError: boolean;
}

export default function EmailInput({
    userEmail,
    setUserEmail,
    postEmail,
    postEmailIsLoading,
    postEmailIsError,
}: EmailInputProps) {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailIsValid = isValidEmail(userEmail);
        if (!emailIsValid) {
            return toast.error("Votre email est invalide");
        }

        await postEmail(userEmail);
    };
    return (
        <form onSubmit={handleSubmit}>
            <StyledSearchInput
                className="flex md:w-5/6 my-8"
                isError={postEmailIsError}
            >
                <StyledInput
                    autoFocus
                    type="text"
                    placeholder="Votre e-mail"
                    className="pl-4"
                    value={userEmail}
                    onChange={e => {
                        setUserEmail(e.target.value);
                    }}
                />
                <button
                    type="submit"
                    role="button"
                    disabled={postEmailIsLoading}
                >
                    <StyledSearchButton className="flex justify-center items-center py-3 px-2 md:px-8">
                        {postEmailIsLoading ? (
                            <Dots />
                        ) : (
                            <StyledSpanButton className="text-sm md:text-xl font-normal">
                                Valider
                            </StyledSpanButton>
                        )}
                    </StyledSearchButton>
                </button>
            </StyledSearchInput>
        </form>
    );
}
