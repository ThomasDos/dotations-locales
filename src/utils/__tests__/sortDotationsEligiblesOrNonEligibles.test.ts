import { dotationsMocked } from "__fixtures__/dotationsMocked";

import sortDotationsEligiblesOrNonEligibles from "../sortDotationsEligiblesOrNonEligibles";

describe("sortDotationsEligiblesOrNonEligibles", () => {
    const expectedResult = {
        dotationsEligibles: {
            dotationForfaitaire: {
                annees: [{ "2022": 263676 }, { "2021": 264940 }],
                criteres: {},
                description:
                    "Votre dotation forfaitaire est stable par rapport à l’année 2021",
                title: "Dotations Forfaitaire (DF)",
            },
            dotationSolidariteRurale: {
                annees: [{ "2022": 90671 }, { "2021": 86048 }],
                criteres: {},
                description:
                    "Légère augmentation en 2022 dû à la part Bourg Centre",
                sousDotations: [
                    {
                        dsrFractionCible: {
                            annees: [{ "2022": 0 }, { "2021": 0 }],
                            criteres: {},
                            description: "",
                            title: "Part Cible",
                        },
                    },
                    {
                        dsrFractionPerequation: {
                            annees: [{ "2022": 90671 }, { "2021": 86048 }],
                            criteres: {},
                            description: "",
                            title: "Part Péréquation",
                        },
                    },
                    {
                        dsrFractionBourgCentre: {
                            annees: [{ "2022": 0 }, { "2021": 0 }],
                            criteres: {},
                            description: "",
                            title: "Part Bourg Centre",
                        },
                    },
                ],
                title: "Dotations Solidarité Rurale (DSR)",
            },
        },
        dotationsNonEligibles: {
            dotationNationalePerequation: {
                annees: [{ "2022": 0 }, { "2021": 0 }],
                criteres: {},
                description: "Lorem Ipsum DNP",
                title: "Dotations Nationale de Péréquation (DNP)",
            },
            dsuMontant: {
                annees: [{ "2022": 0 }, { "2021": 0 }],
                criteres: {},
                description: "Dotation pour les communes urbaines",
                title: "Dotations Solidarité Urbaine (DSU)",
            },
        },
    };

    it("should return an object sorted descending", () => {
        expect(sortDotationsEligiblesOrNonEligibles(dotationsMocked)).toEqual(
            expectedResult
        );
    });
});
