import {
    anneesSerializer,
    criteresSerializer,
    dotationSerializer,
} from "models/commune/commune.serializer";
import {
    CommuneSimulation,
    CommuneSimulationDto,
} from "./simulation.interface";

export const fetchCommuneSerializerSimulation = (
    rawResult: CommuneSimulationDto
): CommuneSimulation => ({
    annees: anneesSerializer(rawResult.dotations),
    codeInsee: rawResult.code_insee,
    criteresGeneraux: criteresSerializer(rawResult.criteres_generaux),
    dotations: dotationSerializer(rawResult.dotations),
    avertissementPrecisionSimulation:
        rawResult.avertissement_precision_simulation,
});
