import { fetchCommuneMocked } from "__fixtures__/fetchCommuneMocked";

import {
    criteresSerializer,
    dotationSerializer,
    fetchCommuneSerializer,
    sousDotationsSerializer,
} from "../commune.serializer";

describe("fetchCommuneSerializer", () => {
    it("should return serialized commune", () => {
        expect(fetchCommuneSerializer(fetchCommuneMocked)).toEqual({
            codeInsee: "42113",
            criteres: {
                longueurVoirie: {
                    annees: [
                        { "2022": { unite: "km", valeur: "9290" } },
                        { "2021": { unite: "km", valeur: "9290" } },
                    ],
                    description: "Longueur Voirie",
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
                    description: "Population enfants",
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
                    description:
                        "Votre dotation forfaitaire est stable par rapport à l’année 2021",
                    title: "Dotations Forfaitaire (DF)",
                },
                dotationSolidariteRurale: {
                    annees: [{ "2022": 8765 }, { "2021": 8795 }],
                    description:
                        "Légère augmentation en 2022 dû à la part Bourg Centre",
                    sousDotations: [
                        {
                            dsrFractionCible: {
                                annees: [{ "2022": 0 }, { "2021": 0 }],
                                description: "",
                                title: "Part Cible",
                            },
                        },
                        {
                            dsrFractionPerequation: {
                                annees: [{ "2022": 8765 }, { "2021": 8795 }],
                                description: "",
                                title: "Part Péréquation",
                            },
                        },
                        {
                            dsrFractionBourgCentre: {
                                annees: [{ "2022": 0 }, { "2021": 0 }],
                                description: "",
                                title: "Part Bourg Centre",
                            },
                        },
                    ],
                    title: "Dotations Solidarité Rurale (DSR)",
                },
                dsuMontant: {
                    annees: [{ "2022": 0 }, { "2021": 0 }],
                    description: "Dotation pour les communes urbaines",
                    title: "Dotations Solidarité Urbaine (DSU)",
                },
            },
        });
    });
});

describe("criteresSerializer", () => {
    it("should return serialized criteres", () => {
        expect(criteresSerializer(fetchCommuneMocked.criteres)).toEqual({
            longueurVoirie: {
                annees: [
                    { "2022": { unite: "km", valeur: "9290" } },
                    { "2021": { unite: "km", valeur: "9290" } },
                ],
                description: "Longueur Voirie",
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
                description: "Population enfants",
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
        });
    });
});
describe("dotationSerializer", () => {
    it("should return serialized dotations", () => {
        expect(dotationSerializer(fetchCommuneMocked.dotations)).toEqual({
            dotationForfaitaire: {
                annees: [{ "2022": 15161 }, { "2021": 15993 }],
                description:
                    "Votre dotation forfaitaire est stable par rapport à l’année 2021",
                title: "Dotations Forfaitaire (DF)",
            },
            dotationSolidariteRurale: {
                annees: [{ "2022": 8765 }, { "2021": 8795 }],
                description:
                    "Légère augmentation en 2022 dû à la part Bourg Centre",
                sousDotations: [
                    {
                        dsrFractionCible: {
                            annees: [{ "2022": 0 }, { "2021": 0 }],
                            description: "",
                            title: "Part Cible",
                        },
                    },
                    {
                        dsrFractionPerequation: {
                            annees: [{ "2022": 8765 }, { "2021": 8795 }],
                            description: "",
                            title: "Part Péréquation",
                        },
                    },
                    {
                        dsrFractionBourgCentre: {
                            annees: [{ "2022": 0 }, { "2021": 0 }],
                            description: "",
                            title: "Part Bourg Centre",
                        },
                    },
                ],
                title: "Dotations Solidarité Rurale (DSR)",
            },
            dsuMontant: {
                annees: [{ "2022": 0 }, { "2021": 0 }],
                description: "Dotation pour les communes urbaines",
                title: "Dotations Solidarité Urbaine (DSU)",
            },
        });
    });
});

describe("sousDotationsSerializer", () => {
    it("should return serialized sous dotations", () => {
        expect(
            sousDotationsSerializer(
                fetchCommuneMocked.dotations.dotation_solidarite_rurale
                    .sous_dotations
            )
        ).toEqual([
            {
                dsrFractionCible: {
                    annees: [{ "2022": 0 }, { "2021": 0 }],
                    description: "",
                    title: "Part Cible",
                },
            },
            {
                dsrFractionPerequation: {
                    annees: [{ "2022": 8765 }, { "2021": 8795 }],
                    description: "",
                    title: "Part Péréquation",
                },
            },
            {
                dsrFractionBourgCentre: {
                    annees: [{ "2022": 0 }, { "2021": 0 }],
                    description: "",
                    title: "Part Bourg Centre",
                },
            },
        ]);
    });
});
