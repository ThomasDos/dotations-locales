import type { Dotations } from "models/commune/commune.interface";

const dotationsMocked: Dotations = {
    dotationForfaitaire: {
        annees: [
            {
                "2022": 263676,
            },
            {
                "2021": 264940,
            },
        ],
        criteres: {},
        description:
            "Votre dotation forfaitaire est stable par rapport à l’année 2021",
        label: "DF",
        title: "Dotation Forfaitaire (DF)",
        key: "dotationForfaitaire",
        info: "mockedInfo",
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
        criteres: {},
        description: "Lorem Ipsum DNP",
        label: "DNP",
        title: "Dotations Nationale de Péréquation (DNP)",
        key: "dotationNationalePerequation",
        info: "mockedInfo",
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
        criteres: {},
        description: "Légère augmentation en 2022 dû à la part Bourg Centre",
        label: "DSR",
        key: "dotationSolidariteRurale",
        info: "mockedInfo",

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
                    criteres: {},
                    description: "",
                    label: "",
                    title: "Part Cible",
                    info: "mockedInfo",
                    key: "dsrFractionCible",
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
                    criteres: {},
                    description: "",
                    label: "",
                    title: "Part Péréquation",
                    info: "mockedInfo",
                    key: "dsrFractionPerequation",
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
                    criteres: {},
                    description: "",
                    label: "",
                    title: "Part Bourg Centre",
                    info: "mockedInfo",
                    key: "dsrFractionBourgCentre",
                },
            },
        ],
        title: "Dotation Solidarité Rurale (DSR)",
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
        criteres: {},
        description: "Dotation pour les communes urbaines",
        label: "DSU",
        title: "Dotation Solidarité Urbaine (DSU)",
        key: "dsuMontant",
        info: "mockedInfo",
    },
};

export default dotationsMocked;
