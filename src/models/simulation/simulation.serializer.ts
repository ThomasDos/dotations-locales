import {
    anneesCriteresSerializer,
    anneesSerializer,
    criteresSerializer,
    dotationSerializer,
} from "models/entity/entity.serializer";
import { EntitySimulation, EntitySimulationDto } from "./simulation.interface";

export const fetchEntitySerializerSimulation = (
    rawResult: EntitySimulationDto
): EntitySimulation => ({
    annees: anneesSerializer(rawResult.dotations),
    code: rawResult.code,
    criteresGeneraux: criteresSerializer(rawResult.criteres_generaux),
    dotations: dotationSerializer(rawResult.dotations),
    anneesCriteres: anneesCriteresSerializer(rawResult.criteres_generaux),
    //TODO: Remettre en dynamique quand on voudra le message de précision
    // avertissementPrecisionSimulation:
    //     rawResult.avertissement_precision_simulation,
    avertissementPrecisionSimulation: false,
    libelle: rawResult.libelle,
});
