import { EntityDto } from "models/entity/entity.interface";

export const fetchCommuneMocked: EntityDto = {
    code: "42113",
    libelle: "Mocked Commune",
    part_dotation_rrf: { annees: [] },
    criteres_generaux: {
        longueur_voirie: {
            annees: [
                {
                    "2022": {
                        unite: "km",
                        valeur: "9290",
                    },
                },
                {
                    "2021": {
                        unite: "km",
                        valeur: "9290",
                    },
                },
            ],
        },
        places_caravanes_avant_majoration: {
            annees: [
                {
                    "2022": {
                        unite: null,
                        valeur: "0",
                    },
                },
                {
                    "2021": {
                        unite: null,
                        valeur: "0",
                    },
                },
            ],
        },
        population_dgf: {
            annees: [
                {
                    "2022": {
                        unite: null,
                        valeur: "248",
                    },
                },
                {
                    "2021": {
                        unite: null,
                        valeur: "248",
                    },
                },
            ],
        },
        population_enfants: {
            annees: [
                {
                    "2022": {
                        unite: null,
                        valeur: "43",
                    },
                },
                {
                    "2021": {
                        unite: null,
                        valeur: "43",
                    },
                },
            ],
        },
        potentiel_financier_par_habitant: {
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
        },
        residences_secondaires: {
            annees: [
                {
                    "2022": {
                        unite: null,
                        valeur: "14",
                    },
                },
                {
                    "2021": {
                        unite: null,
                        valeur: "14",
                    },
                },
            ],
        },
        superficie: {
            annees: [
                {
                    "2022": {
                        unite: "m²",
                        valeur: "622",
                    },
                },
                {
                    "2021": {
                        unite: "m²",
                        valeur: "622",
                    },
                },
            ],
        },
        zone_de_montagne: {
            annees: [
                {
                    "2022": {
                        unite: null,
                        valeur: "Oui",
                    },
                },
                {
                    "2021": {
                        unite: null,
                        valeur: "Oui",
                    },
                },
            ],
        },
    },
    dotations: {
        dotation_forfaitaire: {
            annees: [
                {
                    "2022": 15161,
                },
                {
                    "2021": 15993,
                },
            ],
            criteres: {},
        },
        dotation_solidarite_rurale: {
            annees: [
                {
                    "2022": 8765,
                },
                {
                    "2021": 8795,
                },
            ],
            criteres: {},
            sous_dotations: [
                {
                    dsr_fraction_cible: {
                        annees: [
                            {
                                "2022": 0,
                            },
                            {
                                "2021": 0,
                            },
                        ],
                        criteres: {},
                    },
                },
                {
                    dsr_fraction_perequation: {
                        annees: [
                            {
                                "2022": 8765,
                            },
                            {
                                "2021": 8795,
                            },
                        ],
                        criteres: {},
                    },
                },
                {
                    dsr_fraction_bourg_centre: {
                        annees: [
                            {
                                "2022": 0,
                            },
                            {
                                "2021": 0,
                            },
                        ],
                        criteres: {},
                    },
                },
            ],
        },
        dsu_montant: {
            annees: [
                {
                    "2022": 0,
                },
                {
                    "2021": 0,
                },
            ],
            criteres: {},
        },
    },
};
