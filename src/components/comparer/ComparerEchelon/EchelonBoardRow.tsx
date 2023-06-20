import HorizontalBarOnBarBackground from "components/ui/BarChart/HorizontalBarOnBarBackground";
import useResize from "hooks/useResize";
import { DotationEchelonFormated } from "models/comparer/comparer.interface";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

const StyledSpanEntityValue = styled.div<{ textCenter?: boolean }>`
    flex: 1;
    font-size: 14px;
    text-align: ${({ textCenter }) => (textCenter ? "center" : "end")};
    @media (min-width: 640px) {
        text-align: end;
    }
`;

const StyledRowContainer = styled.div`
    border-bottom: 1px solid var(--blue-france-850);
`;

interface EchelonBoardRowProps {
    entity: DotationEchelonFormated;
    highestDotationDgf: number;
    libelle: string;
}

function EchelonBoardRow({
    entity,
    highestDotationDgf,
    libelle,
}: EchelonBoardRowProps) {
    const {
        libelle: entityLibelle,
        evolutionDotations,
        strate,
        totalDotation,
        dotationDgfPerHabitant,
        code,
    } = entity;

    const { windowWidth } = useResize();
    const fixedWidth = windowWidth > 640 ? 100 : 25;
    const fixedDividerBarWidth = windowWidth > 640 ? 1 : 4;
    const barWidth =
        ((totalDotation / highestDotationDgf) * 100) / fixedDividerBarWidth;
    const emptyBarWidth = fixedWidth - barWidth;
    const isCurrentEntity = entityLibelle === libelle;
    return (
        <StyledRowContainer
            className={`flex py-2 md:px-4 items-center ${
                isCurrentEntity ? "bg-blue-france-950" : ""
            }`}
            key={entityLibelle}
        >
            <div
                className={`flex-[2] sm:flex-[3] md:flex-[4] flex items-center ${
                    isCurrentEntity ? "font-bold" : ""
                }`}
            >
                {isCurrentEntity && <span className="text-xs">⭐️</span>}
                {entityLibelle} ({code})
            </div>
            <StyledSpanEntityValue>
                <HorizontalBarOnBarBackground
                    widthValueBar={barWidth}
                    widthEmptyBar={emptyBarWidth}
                />
            </StyledSpanEntityValue>
            <StyledSpanEntityValue textCenter>
                {windowWidth > 640
                    ? formatNumberWithSpace(totalDotation)
                    : `${(totalDotation / 1000).toFixed(2)}K`}
                €
            </StyledSpanEntityValue>
            <StyledSpanEntityValue>
                {Math.round(dotationDgfPerHabitant)} €
            </StyledSpanEntityValue>
            <StyledSpanEntityValue textCenter>{strate}</StyledSpanEntityValue>
            <StyledSpanEntityValue>
                {evolutionDotations && evolutionDotations > 0 ? "+" : ""}
                {evolutionDotations}%
            </StyledSpanEntityValue>
        </StyledRowContainer>
    );
}
export default EchelonBoardRow;
