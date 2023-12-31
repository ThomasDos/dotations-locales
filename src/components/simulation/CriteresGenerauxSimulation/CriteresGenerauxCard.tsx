import type { Criteres } from "models/entity/entity.interface";
import { useSelector } from "react-redux";
import { selectInitialCriteresGeneraux } from "store/initialEntity.slice";
import styled from "styled-components";

const CriteresCardStyled = styled.div`
    border: solid 1px var(--blue-france-925);
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-bottom: 40px;
    }
`;

const DescriptionStyled = styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    margin-bottom: 4px;
`;

const ResetStyled = styled.div`
    color: var(--grey-425);
    font-size: 14px;
    line-height: 19px;
    text-decoration: underline;
    cursor: pointer;
    width: max-content;
    &:hover {
        color: darken(var(--grey-425));
    }
`;

const InputBoxStyled = styled.div`
    display: flex;
    min-width: 75%;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: var(--grey-975);
    justify-content: space-between;
    align-items: center;
    border: solid 2px #fff;
    &:hover {
        border: solid 2px var(--blue-france-113);
        color: var(--blue-france-113);
    }
    @media (max-width: 640px) {
        width: 100%;
        margin-bottom: 12px;
    }
`;

const InputStyled = styled.div`
    margin: 0 16px;
    text-align: center;
`;

const CardLeftStyled = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: space-between;
    @media (min-width: 640px) {
        padding-right: 2%;
        flex-direction: column;
    }
`;

const SpanDeltaStyled = styled.span`
    font-size: 14px;
    line-height: 19px;
    color: var(--grey-625-425);
`;

const CounterActionStyled = styled.div`
    user-select: none;
    &:active {
        transform: scale(1.2);
    }
`;

interface CriteresGenerauxCardProps {
    criteres: Criteres;
    setCriteres: (criteresModified: Criteres) => void;
}

export default function CriteresGenerauxCard({
    criteres,
    setCriteres,
}: CriteresGenerauxCardProps) {
    const initialCriteresGeneraux = useSelector(selectInitialCriteresGeneraux);
    const criteresKeys = Object.keys(criteres);

    return (
        <CriteresCardStyled className="py-3">
            {criteresKeys.map((critereKey: string) => {
                const { description, annees: critereAnnees } =
                    criteres[critereKey];
                const { annees: critereInitialAnnees } =
                    initialCriteresGeneraux[critereKey];
                const currentYear: string = Object.keys(critereAnnees[0])[0];
                const { valeur: critereValue } = critereAnnees[0][currentYear];

                if (isNaN(Number(critereValue))) return;
                const critereInitialValue =
                    critereInitialAnnees[0][
                        Object.keys(critereInitialAnnees[0])[0]
                    ].valeur;

                const deltaValue =
                    Number(critereValue) - Number(critereInitialValue);

                const handleChangeInput = (newValue: number) => {
                    const newState: Criteres = JSON.parse(
                        JSON.stringify(criteres)
                    );
                    newState[critereKey].annees[0][currentYear].valeur =
                        newValue;
                    setCriteres(newState);
                };

                return (
                    <div
                        key={critereKey}
                        className="flex flex-col sm:flex-row justify-between w-full p-3 sm:py-3 sm:px-6 items-center"
                    >
                        <CardLeftStyled>
                            <DescriptionStyled>{description}</DescriptionStyled>
                            {!!deltaValue && (
                                <ResetStyled
                                    onClick={() => {
                                        handleChangeInput(
                                            Number(critereInitialValue)
                                        );
                                    }}
                                >
                                    Réinitialiser
                                </ResetStyled>
                            )}
                        </CardLeftStyled>
                        <div className="w-full flex flex-1 flex-col-reverse sm:flex-row items-center sm:justify-end">
                            <SpanDeltaStyled className="sm:mr-4 flex items-center">
                                {!!deltaValue &&
                                    `${deltaValue > 0 ? "+" : ""}${Math.round(
                                        deltaValue
                                    )}`}
                            </SpanDeltaStyled>
                            <InputBoxStyled>
                                <CounterActionStyled
                                    className="cursor-pointer text-3xl"
                                    onClick={() => {
                                        const valueNumber =
                                            Number(critereValue);

                                        if (Math.floor(valueNumber) <= 0)
                                            return;

                                        handleChangeInput(valueNumber - 1);
                                    }}
                                >
                                    -
                                </CounterActionStyled>
                                <InputStyled>
                                    <input
                                        style={{
                                            minWidth: "100%",
                                            outline: "none",
                                        }}
                                        className="text-center"
                                        type="text"
                                        name={description}
                                        id={description}
                                        value={Math.round(Number(critereValue))}
                                        onChange={e => {
                                            const valueNumber = Number(
                                                e.target.value
                                            );

                                            if (
                                                isNaN(valueNumber) ||
                                                valueNumber > 99999999
                                            )
                                                return;
                                            handleChangeInput(valueNumber);
                                        }}
                                    />
                                </InputStyled>
                                <CounterActionStyled
                                    className="cursor-pointer text-xl"
                                    onClick={() => {
                                        const valueNumber =
                                            Number(critereValue);
                                        if (valueNumber === 99999999) return;

                                        handleChangeInput(valueNumber + 1);
                                    }}
                                >
                                    +
                                </CounterActionStyled>
                            </InputBoxStyled>
                        </div>
                    </div>
                );
            })}
        </CriteresCardStyled>
    );
}
