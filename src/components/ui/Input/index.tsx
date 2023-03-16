import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

const StyledSearchInput = styled.div<{ isError?: boolean }>`
    border-bottom: ${({ isError }) =>
        `2px solid var(--${
            isError ? "error-425" : "blue-france-sun-113-625"
        })`};
`;

const StyledInput = styled.input`
    width: 100%;
    background: var(--grey-950);
    color: var(--grey-425);
    font-style: italic;
    padding: 16px 12px;
    :focus {
        outline: none;
    }
`;

interface InputProps {
    value: string;
    setValue(value: string): void;
    placeholder: string;
    isLoading?: boolean;
    isError?: boolean;
    className?: string;
    autoFocus?: boolean;
    type?: HTMLInputTypeAttribute | undefined;
}

export default function Input({
    value,
    setValue,
    placeholder,
    isError,
    className,
    autoFocus = false,
    type = "text",
}: InputProps) {
    return (
        <StyledSearchInput isError={isError} className={className}>
            <StyledInput
                autoFocus={autoFocus}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                }}
            />
        </StyledSearchInput>
    );
}
