import { postSimulationMocked } from "__fixtures__/postSimulationMocked";
import { fetchCommuneSerializerSimulation } from "../simulation.serializer";

describe("fetchCommuneSerializer", () => {
    it("should return serialized commune", () => {
        expect(fetchCommuneSerializerSimulation(postSimulationMocked)).toEqual({
            annees: ["2022", "2021"],
            codeInsee: "42113",
            criteresGeneraux: {
                longueurVoirie: {
                    annees: [
                        { "2022": { unite: "km", valeur: "9290" } },
                        { "2021": { unite: "km", valeur: "9290" } },
                    ],
                    description: "Longueur de voirie",
                },
                placesCaravanesAvantMajoration: {
                    annees: [
                        { "2022": { unite: null, valeur: "0" } },
                        { "2021": { unite: null, valeur: "0" } },
                    ],
                    description: "Places caravanes avant majoration",
                },
                populationDgf: {
                    annees: [
                        { "2022": { unite: null, valeur: "248" } },
                        { "2021": { unite: null, valeur: "248" } },
                    ],
                    description: "Population DGF",
                },
                populationEnfants: {
                    annees: [
                        { "2022": { unite: null, valeur: "43" } },
                        { "2021": { unite: null, valeur: "43" } },
                    ],
                    description: "Population 3 à 16 ans",
                },
                potentielFinancierParHabitant: {
                    annees: [
                        { "2022": { unite: "€", valeur: "742.818548" } },
                        { "2021": { unite: "€", valeur: "742.818548" } },
                    ],
                    description: "Potentiel financier par habitant",
                },
                residencesSecondaires: {
                    annees: [
                        { "2022": { unite: null, valeur: "14" } },
                        { "2021": { unite: null, valeur: "14" } },
                    ],
                    description: "Résidences secondaires",
                },
                superficie: {
                    annees: [
                        { "2022": { unite: "m²", valeur: "622" } },
                        { "2021": { unite: "m²", valeur: "622" } },
                    ],
                    description: "Superficie",
                },
                zoneDeMontagne: {
                    annees: [
                        { "2022": { unite: null, valeur: "Oui" } },
                        { "2021": { unite: null, valeur: "Oui" } },
                    ],
                    description: "Zone de montagne",
                },
            },
            dotations: {
                dotationForfaitaire: {
                    annees: [{ "2022": 15161 }, { "2021": 15993 }],
                    criteres: {},
                    description:
                        "Votre dotation forfaitaire est stable par rapport à l’année 2021",
                    label: "DF",
                    title: "Dotation Forfaitaire (DF)",
                },
                dotationSolidariteRurale: {
                    annees: [{ "2022": 8765 }, { "2021": 8795 }],
                    criteres: {},
                    description:
                        "Légère augmentation en 2022 dû à la part Bourg Centre",
                    label: "DSR",
                    sousDotations: [
                        {
                            dsrFractionCible: {
                                annees: [{ "2022": 0 }, { "2021": 0 }],
                                criteres: {},
                                description: "Non éligible à la Part Cible",
                                label: "",
                                title: "Part Cible",
                            },
                        },
                        {
                            dsrFractionPerequation: {
                                annees: [{ "2022": 8765 }, { "2021": 8795 }],
                                criteres: {},
                                description:
                                    "Montant de la commune éligible à la Péréquation",
                                label: "",
                                title: "Part Péréquation",
                            },
                        },
                        {
                            dsrFractionBourgCentre: {
                                annees: [{ "2022": 0 }, { "2021": 0 }],
                                criteres: {},
                                description: "Montant de la commune éligible",
                                label: "",
                                title: "Part Bourg Centre",
                            },
                        },
                    ],
                    title: "Dotation Solidarité Rurale (DSR)",
                },
                dsuMontant: {
                    annees: [{ "2022": 0 }, { "2021": 0 }],
                    criteres: {},
                    description: "Dotation pour les communes urbaines",
                    label: "DSU",
                    title: "Dotation Solidarité Urbaine (DSU)",
                },
            },
            avertissementPrecisionSimulation: true,
        });
    });
});
