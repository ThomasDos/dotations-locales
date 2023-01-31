import dotationsMocked from "__fixtures__/dotationsMocked";
import sortDotationsByAmountDescending from "../sortDotationsByAmountDescending";

describe("sortDotationsByAmountDescending(dotations: Dotations, currentYear: string)", () => {
    const expectedResult = {
        dotationForfaitaire: {
            annees: [{ "2022": 263676 }, { "2021": 264940 }],
            criteres: {},
            description:
                "Votre dotation forfaitaire est stable par rapport à l’année 2021",
            info: "mockedInfo",
            key: "dotationForfaitaire",
            label: "DF",
            title: "Dotation Forfaitaire (DF)",
        },
        dotationNationalePerequation: {
            annees: [{ "2022": 0 }, { "2021": 0 }],
            criteres: {},
            description: "Lorem Ipsum DNP",
            info: "mockedInfo",
            key: "dotationNationalePerequation",
            label: "DNP",
            title: "Dotations Nationale de Péréquation (DNP)",
        },
        dotationSolidariteRurale: {
            annees: [{ "2022": 90671 }, { "2021": 86048 }],
            criteres: {},
            description:
                "Légère augmentation en 2022 dû à la part Bourg Centre",
            info: "mockedInfo",
            key: "dotationSolidariteRurale",
            label: "DSR",
            sousDotations: [
                {
                    dsrFractionCible: {
                        annees: [{ "2022": 0 }, { "2021": 0 }],
                        criteres: {},
                        description: "",
                        info: "mockedInfo",
                        key: "dsrFractionCible",
                        label: "",
                        title: "Part Cible",
                    },
                },
                {
                    dsrFractionPerequation: {
                        annees: [{ "2022": 90671 }, { "2021": 86048 }],
                        criteres: {},
                        description: "",
                        info: "mockedInfo",
                        key: "dsrFractionPerequation",
                        label: "",
                        title: "Part Péréquation",
                    },
                },
                {
                    dsrFractionBourgCentre: {
                        annees: [{ "2022": 0 }, { "2021": 0 }],
                        criteres: {},
                        description: "",
                        info: "mockedInfo",
                        key: "dsrFractionBourgCentre",
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
            info: "mockedInfo",
            key: "dsuMontant",
            label: "DSU",
            title: "Dotation Solidarité Urbaine (DSU)",
        },
    };
    it("should return two objects of dotations sorted, eligibles and nonEligibles", () => {
        expect(
            sortDotationsByAmountDescending(dotationsMocked, "2022")
        ).toEqual(expectedResult);
    });
});
