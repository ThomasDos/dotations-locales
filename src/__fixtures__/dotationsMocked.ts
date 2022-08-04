import type { Dotations } from "models/commune/commune.interface";

export const dotationsMocked: Dotations = {
    dotationForfaitaire: {
        annees: [
            {
                "2022": 263676,
            },
            {
                "2021": 264940,
            },
        ],
        description:
            "Votre dotation forfaitaire est stable par rapport à l’année 2021",
        title: "Dotations Forfaitaire (DF)",
    },
    dotationNationalePerequation: {
        annees: [
            {
                "2022": 0,
            },
            {
                "2021": 0,
            },
        ],
        description: "Lorem Ipsum DNP",
        title: "Dotations Nationale de Péréquation (DNP)",
    },
    dotationSolidariteRurale: {
        annees: [
            {
                "2022": 90671,
            },
            {
                "2021": 86048,
            },
        ],
        description: "Légère augmentation en 2022 dû à la part Bourg Centre",
        sousDotations: [
            {
                dsrFractionCible: {
                    annees: [
                        {
                            "2022": 0,
                        },
                        {
                            "2021": 0,
                        },
                    ],
                    description: "",
                    title: "Part Cible",
                },
            },
            {
                dsrFractionPerequation: {
                    annees: [
                        {
                            "2022": 90671,
                        },
                        {
                            "2021": 86048,
                        },
                    ],
                    description: "",
                    title: "Part Péréquation",
                },
            },
            {
                dsrFractionBourgCentre: {
                    annees: [
                        {
                            "2022": 0,
                        },
                        {
                            "2021": 0,
                        },
                    ],
                    description: "",
                    title: "Part Bourg Centre",
                },
            },
        ],
        title: "Dotations Solidarité Rurale (DSR)",
    },
    dsuMontant: {
        annees: [
            {
                "2022": 0,
            },
            {
                "2021": 0,
            },
        ],
        description: "Dotation pour les communes urbaines",
        title: "Dotations Solidarité Urbaine (DSU)",
    },
};
