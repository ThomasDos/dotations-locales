import type { Commune, Criteres } from "models/commune/commune.interface";
import type {
    PostSimulation,
    PostSimulationData,
} from "models/simulation/simulation.interface";
import convertCamelCaseToSnakeCase from "utils/convertCamelCaseToSnakeCase";

export const postSimulationDeserializer = (
    simulationCommune: Commune,
    selectLoiSimulation: string
): PostSimulation => {
    return {
        code_insee: simulationCommune.codeInsee,
        data: postSimulationDataDeserializer(
            simulationCommune.criteresGeneraux
        ),
        periode_loi: selectLoiSimulation,
    };
};

export const postSimulationDataDeserializer = (
    criteresGeneraux: Criteres
): PostSimulationData => {
    const criteresGenerauxKeys = Object.keys(criteresGeneraux);
    const postSimulationData: PostSimulationData = {};

    criteresGenerauxKeys.forEach((critereGeneralKey: string) => {
        const valeur = (): boolean | number => {
            const currentYearObject =
                criteresGeneraux[critereGeneralKey].annees[0];

            const [currentYear] = Object.keys(
                criteresGeneraux[critereGeneralKey].annees[0]
            );
            const { valeur: critereGeneralValeur } =
                currentYearObject[currentYear];

            switch (critereGeneralValeur) {
                case "Oui":
                    return true;
                case "Non":
                    return false;
                default:
                    return Number(critereGeneralValeur);
            }
        };

        postSimulationData[convertCamelCaseToSnakeCase(critereGeneralKey)] =
            valeur();
    });
    return postSimulationData;
};
