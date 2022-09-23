import styled from "styled-components";

const StyledFooter = styled.div`
    background: var(--green-tilleul-verveine-975);
    margin: 40px 120px;
    padding: 24px 32px;
    text-align: center;
`;

export default function DashboardFooter() {
    return (
        <StyledFooter>
            Les montants des dotations sont calculés sur la base de la{" "}
            <u>loi de finances 2022</u> avec les{" "}
            <u>critères de répartitions 2022.</u>
            <br />
            Pour rappel, seule la notification officielle de la DGF fait foi.
        </StyledFooter>
    );
}
