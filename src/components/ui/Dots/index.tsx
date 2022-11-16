import styled from "styled-components";
const StyledDots = styled.div`
    display: inline-block;
    position: relative;
    width: 68px;
    height: 100%;
    margin: 0 auto;
    padding: 14px;

    div {
        position: absolute;
        top: calc(50% - 5px);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--grey-975);
        animation-timing-function: cubic-bezier(0, 1, 1, 0);

        &:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
        }
        &:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        &:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        &:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
        }
    }
    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
`;

export default function Dots() {
    return (
        <StyledDots>
            <div />
            <div />
            <div />
            <div />
        </StyledDots>
    );
}
