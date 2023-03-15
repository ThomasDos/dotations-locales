import styled from "styled-components";

const StyledDropdownRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    cursor: pointer;
    :hover {
        background-color: var(--blue-france-975);
    }
    :active {
        background-color: var(--blue-france-sun-113-625);
        color: var(--grey-1000);
    }
`;

export default StyledDropdownRow;
