import styled from "styled-components";

const StyledBaseCalculLoi = styled.div`
    display: flex;
    flex: 2;
    @media (min-width: 640px) {
        width: 100%;
        border-top: solid 1px var(--blue-france-925);
        padding-top: 16px;
        margin-top: 16px;
        align-items: center;
    }
`;

const StyledLoiLabel = styled.div`
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    margin: 0 4px;
    background-color: var(--grey-950);
    border-radius: 40px;
    padding: 2px 8px;
    display: flex;
    align-self: center;
`;
//TODO: gerer dynamiquement back
const lois = ["Loi en vigueur 2022", "Critères de répartition 2022"];

export default function BaseCalculLoi() {
    return (
        <StyledBaseCalculLoi>
            <span className="text-sm mr-1 hidden sm:block">
                Base de calcul :{" "}
            </span>
            {lois.map((loi: string) => (
                <StyledLoiLabel key={loi}>{loi}</StyledLoiLabel>
            ))}
        </StyledBaseCalculLoi>
    );
}
