import { Button, LabelPercentage } from "components/ui";
import type { Criteres } from "models/commune/commune.interface";
import styled from "styled-components";

import ParameterRow from "./ParameterRow";

const EntityParametersContainer = styled.div`
    width: 25%;
    background: var(--grey-975-75);
    z-index: 1;
    padding: 56px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface EntityParametersProps {
    criteres: Criteres;
}

const EntityParameters = ({ criteres }: EntityParametersProps) => {
    const criteresKeys = Object.keys(criteres);
    return (
        <EntityParametersContainer>
            <div className="w-full text-center sticky top-16">
                <div className="mb-6">
                    <span className="font-bold">
                        Données connues de votre commune
                    </span>
                </div>
                <div>
                    {criteresKeys.map((critereKey: string) => {
                        return (
                            <ParameterRow
                                key={critereKey}
                                critere={criteres[critereKey]}
                            />
                        );
                    })}
                </div>
                <div className="my-6">
                    <Button text="Modifier pour simuler" />
                </div>
                <span className="flex font-bold mb-10">Synthèse</span>
                <div className="bg-white rounded-lg py-4 px-16">
                    <span className="text-sm">Dotation / habitant</span>
                    <div className="flex justify-center mt-2">
                        <span className="font-bold text-xl mr-2">110,25€</span>
                        <LabelPercentage percentage={2.2} />
                    </div>
                </div>
            </div>
        </EntityParametersContainer>
    );
};

export default EntityParameters;
