import styled from "styled-components";

export const StyledBodyBoardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px var(--blue-france-925);
    align-items: center;
`;
export const StyledBodyBoardHeaderTitle = styled.div`
    font-weight: 700;
    flex: 2;
    @media (min-width: 640px) {
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0em;
        flex: 1;
    }
`;
export const StyledBodyBoardHeaderCol = styled.div`
    display: flex;
    flex: 4;
    @media (min-width: 640px) {
        flex: 3;
    }
`;
export const StyledBodyBoardCol = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    color: var(--grey-425);
    flex: 1;
    text-align: right;
`;
export const StyledBodyBoardRow = styled.div<{ isLastRow?: boolean }>`
    display: flex;
    justify-content: space-between;
    border-bottom: ${({ isLastRow }) =>
        isLastRow ? "" : "1px solid var(--grey-925)"};
    padding: 8px 0;
    @media (min-width: 640px) {
        padding: 16px 0;
    }
`;
export const StyledBodyBoardRowDescription = styled.div`
    flex: 2;
    @media (max-width: 640px) {
        font-size: 14px;
    }
    @media (min-width: 640px) {
        flex: 1;
    }
`;

export const StyledBodyBoardRowValues = styled.div`
    display: flex;
    flex: 4;
    white-space: nowrap;
    @media (min-width: 640px) {
        flex: 3;
    }
`;
export const StyledBodyBoardRowValue = styled.div<{ hasValue: boolean }>`
    flex: 1;
    text-align: right;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0em;
    color: ${({ hasValue }) => !hasValue && "var(--grey-625-425)"};

    @media (min-width: 640px) {
        font-size: 14px;
    }
`;
