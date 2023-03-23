import { LabelPercentage } from "components/ui";
import styled from "styled-components";
import { RrfFormatted } from "utils/formatRrfEvolution";

interface RrfContainerProps {
    rrfFormatted: RrfFormatted;
}

const StyledRrfContainer = styled.div`
    padding: 20px;
    border: 1px solid #e6e6e6;
    border-top: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 640px) {
        padding: 16px 48px 16px 32px;
    }
`;

const RrfContainer = ({ rrfFormatted }: RrfContainerProps) => {
    const { rrfLabelText, rrfPercentageEvolution } = rrfFormatted;

    return (
        <StyledRrfContainer>
            <span className="text-sm text-grey-mayback">
                Part des dotations sur vos recettes réelles de fonctionnement
                (RRF)
            </span>
            <LabelPercentage
                hasBackgroundColor={false}
                textBold={false}
                percentage={rrfPercentageEvolution}
                valeur={rrfLabelText}
                showPercentageEvolution
            />
        </StyledRrfContainer>
    );
};

export default RrfContainer;
