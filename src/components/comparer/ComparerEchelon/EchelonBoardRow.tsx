import HorizontalBarOnBarBackground from "components/ui/BarChart/HorizontalBarOnBarBackground";
import useResize from "hooks/useResize";
import { DotationEchelonFormated } from "models/comparer/comparer.interface";
import Link from "next/link";
import styled from "styled-components";
import capitalizeEveryFirstLetter from "utils/capitalizeEveryFirstLetter";
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
    currentEntityCode: string;
}

function EchelonBoardRow({
    entity,
    highestDotationDgf,
    currentEntityCode,
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
    const fixedBarWidth = windowWidth > 640 ? 100 : 25;
    const barWidthRatio = windowWidth > 640 ? 1 : 4;
    const calculatedBarWidth =
        ((totalDotation / highestDotationDgf) * 100) / barWidthRatio;
    const emptyBarWidth = fixedBarWidth - calculatedBarWidth;
    const isCurrentEntity = currentEntityCode === code;
    return (
        <StyledRowContainer
            className={`flex py-2 md:px-4 items-center ${
                isCurrentEntity ? "bg-blue-france-950" : ""
            }`}
            key={entityLibelle}
        >
            <div
                className={`flex-[2] sm:flex-[3] md:flex-[4] flex ${
                    isCurrentEntity && "font-bold"
                }`}
            >
                <Link href={`/${code}?libelle=${entityLibelle}`} target="_">
                    <div className="flex items-center">
                        {isCurrentEntity && (
                            <span className="text-xs">⭐️</span>
                        )}
                        {capitalizeEveryFirstLetter(entityLibelle)} ({code})
                    </div>
                </Link>
            </div>
            <StyledSpanEntityValue>
                <HorizontalBarOnBarBackground
                    widthValueBar={calculatedBarWidth}
                    widthEmptyBar={emptyBarWidth}
                />
            </StyledSpanEntityValue>
            <StyledSpanEntityValue textCenter>
                {totalDotation
                    ? windowWidth > 640
                        ? formatNumberWithSpace(totalDotation)
                        : `${(totalDotation / 1000).toFixed(2)}K`
                    : 0}
                €
            </StyledSpanEntityValue>
            <StyledSpanEntityValue>
                {Math.round(dotationDgfPerHabitant)} €
            </StyledSpanEntityValue>
            <StyledSpanEntityValue textCenter>{strate}</StyledSpanEntityValue>
            <StyledSpanEntityValue>
                {evolutionDotations && evolutionDotations > 0 ? "+" : ""}
                {!!evolutionDotations && `${evolutionDotations}%`}
            </StyledSpanEntityValue>
        </StyledRowContainer>
    );
}
export default EchelonBoardRow;
