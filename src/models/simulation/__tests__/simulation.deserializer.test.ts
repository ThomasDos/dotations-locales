import {
    postSimulationDataDeserializer,
    postSimulationDeserializer,
} from "../simulation.deserializer";

describe("simulation deserializer", () => {
    describe("postSimulationDeserializer", () => {
        it("should return a deserialized post simulation with a simulationEntity", () => {
            expect(
                postSimulationDeserializer(
                    {
                        annees: ["2022", "2021"],
                        anneesCriteres: ["2022", "2021"],
                        code: "42113",
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
                                description:
                                    "Places caravanes avant majoration",
                            },
                            populationEnfants: {
                                annees: [
                                    { "2022": { unite: null, valeur: "43" } },
                                    { "2021": { unite: null, valeur: "43" } },
                                ],
                                description: "Population 3 à 16 ans",
                            },
                            populationInsee: {
                                annees: [
                                    { "2022": { unite: null, valeur: "248" } },
                                    { "2021": { unite: null, valeur: "248" } },
                                ],
                                description: "Population DGF",
                            },
                            potentielFinancierParHabitant: {
                                annees: [
                                    {
                                        "2022": {
                                            unite: "€",
                                            valeur: "742.818548",
                                        },
                                    },
                                    {
                                        "2021": {
                                            unite: "€",
                                            valeur: "742.818548",
                                        },
                                    },
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
                                key: "dotationForfaitaire",
                            },
                            dotationSolidariteRurale: {
                                annees: [{ "2022": 8765 }, { "2021": 8795 }],
                                criteres: {},
                                description:
                                    "Légère augmentation en 2022 dû à la part Bourg Centre",
                                label: "DSR",
                                key: "dotationSolidariteRurale",

                                sousDotations: [
                                    {
                                        dsrFractionCible: {
                                            annees: [
                                                { "2022": 0 },
                                                { "2021": 0 },
                                            ],
                                            criteres: {},
                                            description:
                                                "Non éligible à la Part Cible",
                                            label: "",
                                            title: "Part Cible",
                                            key: "dsrFractionCible",
                                        },
                                    },
                                    {
                                        dsrFractionPerequation: {
                                            annees: [
                                                { "2022": 8765 },
                                                { "2021": 8795 },
                                            ],
                                            criteres: {},
                                            description:
                                                "Montant de la commune éligible à la Péréquation",
                                            label: "",
                                            title: "Part Péréquation",
                                            key: "dsrFractionPerequation",
                                        },
                                    },
                                    {
                                        dsrFractionBourgCentre: {
                                            annees: [
                                                { "2022": 0 },
                                                { "2021": 0 },
                                            ],
                                            criteres: {},
                                            description:
                                                "Montant de la commune éligible",
                                            label: "",
                                            title: "Part Bourg Centre",
                                            key: "dsrFractionBourgCentre",
                                        },
                                    },
                                ],
                                title: "Dotation Solidarité Rurale (DSR)",
                            },
                            dsuMontant: {
                                annees: [{ "2022": 0 }, { "2021": 0 }],
                                criteres: {},
                                description:
                                    "Dotation pour les communes urbaines",
                                label: "DSU",
                                title: "Dotation Solidarité Urbaine (DSU)",
                                key: "dsuMontant",
                            },
                        },
                    },
                    "2022"
                )
            ).toEqual({
                code: "42113",
                data: {
                    longueur_voirie: 9290,
                    places_caravanes_avant_majoration: 0,
                    population_enfants: 43,
                    population_insee: 248,
                    potentiel_financier_par_habitant: 742.818548,
                    residences_secondaires: 14,
                    superficie: 622,
                    zone_de_montagne: true,
                },
                periode_loi: "2022",
            });
        });
    });

    describe("postSimulationDataDeserializer", () => {
        it("should return a deserialized post simulation data with criteres generaux", () => {
            expect(
                postSimulationDataDeserializer({
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
                    populationEnfants: {
                        annees: [
                            { "2022": { unite: null, valeur: "43" } },
                            { "2021": { unite: null, valeur: "43" } },
                        ],
                        description: "Population 3 à 16 ans",
                    },
                    populationInsee: {
                        annees: [
                            { "2022": { unite: null, valeur: "248" } },
                            { "2021": { unite: null, valeur: "248" } },
                        ],
                        description: "Population DGF",
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
                })
            ).toEqual({
                longueur_voirie: 9290,
                places_caravanes_avant_majoration: 0,
                population_enfants: 43,
                population_insee: 248,
                potentiel_financier_par_habitant: 742.818548,
                residences_secondaires: 14,
                superficie: 622,
                zone_de_montagne: true,
            });
        });
        it("should return a deserialized post simulation data with criteres generaux", () => {
            expect(
                postSimulationDataDeserializer({
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
                    populationEnfants: {
                        annees: [
                            { "2022": { unite: null, valeur: "43" } },
                            { "2021": { unite: null, valeur: "43" } },
                        ],
                        description: "Population 3 à 16 ans",
                    },
                    populationInsee: {
                        annees: [
                            { "2022": { unite: null, valeur: "248" } },
                            { "2021": { unite: null, valeur: "248" } },
                        ],
                        description: "Population DGF",
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
                            { "2022": { unite: null, valeur: "Non" } },
                            { "2021": { unite: null, valeur: "Non" } },
                        ],
                        description: "Zone de montagne",
                    },
                })
            ).toEqual({
                longueur_voirie: 9290,
                places_caravanes_avant_majoration: 0,
                population_enfants: 43,
                population_insee: 248,
                potentiel_financier_par_habitant: 742.818548,
                residences_secondaires: 14,
                superficie: 622,
                zone_de_montagne: false,
            });
        });
    });
});
