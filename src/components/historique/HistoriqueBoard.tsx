import { TagData } from "components/ui";
import type {
    HistoriqueDotation,
    HistoriqueDotations,
} from "models/historique/historique.serializer";
import { useRouter } from "next/router";
import styled from "styled-components";
import formatNumberWithSpace from "utils/formatNumberWithSpace";

import HistoriqueCardHeader from "./HistoriqueCardHeader";

const StyledHistoriqueBoard = styled.div`
    margin-top: 40px;
    margin-bottom: 120px;
    border: 1px solid var(--blue-france-850);
    padding: 32px 48px 56px 32px;
`;

const StyledBodyBoard = styled.div`
    margin-top: 40px;
`;

const StyledBodyBoardHeader = styled.div`
    display: flex;
    padding: 12px 16px;
    justify-content: space-between;
    border-bottom: solid 1px var(--blue-france-925);
    align-items: center;
`;
const StyledBodyBoardHeaderTitle = styled.div`
    flex: 2;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
`;
const StyledBodyBoardHeaderAnnees = styled.div`
    display: flex;
    flex: 1;
`;
const StyledBodyBoardHeaderAnnee = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    color: var(--grey-425);
    flex: 1;
    text-align: right;
`;
const StyledBodyBoardRow = styled.div`
    padding: 16px 8px 16px 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--grey-925);
`;
const StyledBodyBoardRowDescription = styled.div`
    flex: 2;
`;

const StyledBodyBoardRowAnnees = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
`;
const StyledBodyBoardRowAnnee = styled.div`
    flex: 1;
    text-align: right;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0em;
`;

interface HistoriqueBoardProps {
    historiqueData: HistoriqueDotations;
    dotationTitle: string;
}

export default function HistoriqueBoard({
    historiqueData,
    dotationTitle,
}: HistoriqueBoardProps) {
    const lengthAnnees = historiqueData.length;
    const { commune, codeInsee } = useRouter().query as {
        commune: string;
        codeInsee: string;
    };
    return (
        <StyledHistoriqueBoard>
            <HistoriqueCardHeader
                title={`${commune} (${codeInsee})`}
                subtitle={`Historique sur ${lengthAnnees} années`}
            />
            <StyledBodyBoard>
                <StyledBodyBoardHeader>
                    <StyledBodyBoardHeaderTitle>
                        {dotationTitle}
                    </StyledBodyBoardHeaderTitle>
                    <StyledBodyBoardHeaderAnnees>
                        {historiqueData.map(({ year }: HistoriqueDotation) => (
                            <StyledBodyBoardHeaderAnnee key={year}>
                                {year}
                            </StyledBodyBoardHeaderAnnee>
                        ))}
                    </StyledBodyBoardHeaderAnnees>
                </StyledBodyBoardHeader>
                <StyledBodyBoardRow>
                    <StyledBodyBoardRowDescription>
                        Montant DGF
                    </StyledBodyBoardRowDescription>
                    <StyledBodyBoardRowAnnees>
                        {historiqueData.map(
                            ({ value, year }: HistoriqueDotation) => (
                                <StyledBodyBoardRowAnnee
                                    key={year}
                                    className="font-bold"
                                >
                                    {formatNumberWithSpace(value)}€
                                </StyledBodyBoardRowAnnee>
                            )
                        )}
                    </StyledBodyBoardRowAnnees>
                </StyledBodyBoardRow>
                <StyledBodyBoardRow>
                    <StyledBodyBoardRowDescription>
                        Evolution DGF
                    </StyledBodyBoardRowDescription>
                    <StyledBodyBoardRowAnnees>
                        {historiqueData.map(
                            (annee: HistoriqueDotation, index: number) => {
                                const evolutionAnnee =
                                    !!annee.value &&
                                    annee.value -
                                        historiqueData[index - 1]?.value;

                                return (
                                    <StyledBodyBoardRowAnnee key={annee.year}>
                                        {!!index &&
                                            !!evolutionAnnee &&
                                            `${
                                                evolutionAnnee > 0 ? "+" : ""
                                            } ${formatNumberWithSpace(
                                                evolutionAnnee
                                            )}€`}
                                    </StyledBodyBoardRowAnnee>
                                );
                            }
                        )}
                    </StyledBodyBoardRowAnnees>
                </StyledBodyBoardRow>
                <StyledBodyBoardRow>
                    <StyledBodyBoardRowDescription>
                        Evolution de la commune %
                    </StyledBodyBoardRowDescription>
                    <StyledBodyBoardRowAnnees>
                        {historiqueData.map(
                            (annee: HistoriqueDotation, index: number) => {
                                const evolutionAnnee =
                                    annee.value /
                                    historiqueData[index - 1]?.value;
                                return (
                                    <StyledBodyBoardRowAnnee key={annee.year}>
                                        {!!index && !!evolutionAnnee && (
                                            <TagData
                                                position="end"
                                                percentage={Number(
                                                    evolutionAnnee.toFixed(2)
                                                )}
                                                valeur={`${evolutionAnnee.toFixed(
                                                    2
                                                )}%`}
                                            />
                                        )}
                                    </StyledBodyBoardRowAnnee>
                                );
                            }
                        )}
                    </StyledBodyBoardRowAnnees>
                </StyledBodyBoardRow>
            </StyledBodyBoard>
        </StyledHistoriqueBoard>
    );
}
