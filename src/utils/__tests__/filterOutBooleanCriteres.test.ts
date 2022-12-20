import filterOutBooleanCriteres from "utils/filterOutBooleanCriteres";

describe("filterOutBooleanCriteres(criteres: Criteres)", () => {
    it("should return without the boolean value = oui / non", () => {
        const mockedCriteres = {
            longueurVoirie: {
                annees: [
                    {
                        "2022": {
                            unite: "m",
                            valeur: "13000.0",
                        },
                    },
                    {
                        "2021": {
                            unite: "m",
                            valeur: "13000",
                        },
                    },
                    {
                        "2020": {
                            unite: "m",
                            valeur: "13000",
                        },
                    },
                ],
                description: "Longueur de voirie",
            },
            placesCaravanesApresMajoration: {
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
                    {
                        "2020": {
                            unite: null,
                            valeur: "0",
                        },
                    },
                ],
                description: "Places caravanes après majoration",
            },
            populationEnfants: {
                annees: [
                    {
                        "2022": {
                            unite: null,
                            valeur: "28",
                        },
                    },
                    {
                        "2021": {
                            unite: null,
                            valeur: "28",
                        },
                    },
                    {
                        "2020": {
                            unite: null,
                            valeur: "28",
                        },
                    },
                ],
                description: "Population 3 à 16 ans",
            },
            populationInsee: {
                annees: [
                    {
                        "2022": {
                            unite: null,
                            valeur: "215",
                        },
                    },
                    {
                        "2021": {
                            unite: null,
                            valeur: "215",
                        },
                    },
                    {
                        "2020": {
                            unite: null,
                            valeur: "216",
                        },
                    },
                ],
                description: "Population INSEE",
            },
            potentielFinancierParHabitant: {
                annees: [
                    {
                        "2022": {
                            unite: "€",
                            valeur: "654.748918",
                        },
                    },
                    {
                        "2021": {
                            unite: "€",
                            valeur: "645.636364",
                        },
                    },
                    {
                        "2020": {
                            unite: "€",
                            valeur: "619.142241",
                        },
                    },
                ],
                description: "Potentiel financier par habitant",
            },
            residencesSecondaires: {
                annees: [
                    {
                        "2022": {
                            unite: null,
                            valeur: "16",
                        },
                    },
                    {
                        "2021": {
                            unite: null,
                            valeur: "16",
                        },
                    },
                    {
                        "2020": {
                            unite: null,
                            valeur: "16",
                        },
                    },
                ],
                description: "Résidences secondaires",
            },
            superficie: {
                annees: [
                    {
                        "2022": {
                            unite: "ha",
                            valeur: "590",
                        },
                    },
                    {
                        "2021": {
                            unite: "ha",
                            valeur: "590",
                        },
                    },
                    {
                        "2020": {
                            unite: "ha",
                            valeur: "590",
                        },
                    },
                ],
                description: "Superficie",
            },
            zoneDeMontagne: {
                annees: [
                    {
                        "2022": {
                            unite: null,
                            valeur: "Non",
                        },
                    },
                    {
                        "2021": {
                            unite: null,
                            valeur: "Non",
                        },
                    },
                    {
                        "2020": {
                            unite: null,
                            valeur: "Non",
                        },
                    },
                ],
                description: "Zone de montagne",
            },
        };

        const resultExpected = {
            longueurVoirie: {
                annees: [
                    {
                        "2022": {
                            unite: "m",
                            valeur: "13000.0",
                        },
                    },
                    {
                        "2021": {
                            unite: "m",
                            valeur: "13000",
                        },
                    },
                    {
                        "2020": {
                            unite: "m",
                            valeur: "13000",
                        },
                    },
                ],
                description: "Longueur de voirie",
            },
            placesCaravanesApresMajoration: {
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
                    {
                        "2020": {
                            unite: null,
                            valeur: "0",
                        },
                    },
                ],
                description: "Places caravanes après majoration",
            },
            populationEnfants: {
                annees: [
                    {
                        "2022": {
                            unite: null,
                            valeur: "28",
                        },
                    },
                    {
                        "2021": {
                            unite: null,
                            valeur: "28",
                        },
                    },
                    {
                        "2020": {
                            unite: null,
                            valeur: "28",
                        },
                    },
                ],
                description: "Population 3 à 16 ans",
            },
            populationInsee: {
                annees: [
                    {
                        "2022": {
                            unite: null,
                            valeur: "215",
                        },
                    },
                    {
                        "2021": {
                            unite: null,
                            valeur: "215",
                        },
                    },
                    {
                        "2020": {
                            unite: null,
                            valeur: "216",
                        },
                    },
                ],
                description: "Population INSEE",
            },
            potentielFinancierParHabitant: {
                annees: [
                    {
                        "2022": {
                            unite: "€",
                            valeur: "654.748918",
                        },
                    },
                    {
                        "2021": {
                            unite: "€",
                            valeur: "645.636364",
                        },
                    },
                    {
                        "2020": {
                            unite: "€",
                            valeur: "619.142241",
                        },
                    },
                ],
                description: "Potentiel financier par habitant",
            },
            residencesSecondaires: {
                annees: [
                    {
                        "2022": {
                            unite: null,
                            valeur: "16",
                        },
                    },
                    {
                        "2021": {
                            unite: null,
                            valeur: "16",
                        },
                    },
                    {
                        "2020": {
                            unite: null,
                            valeur: "16",
                        },
                    },
                ],
                description: "Résidences secondaires",
            },
            superficie: {
                annees: [
                    {
                        "2022": {
                            unite: "ha",
                            valeur: "590",
                        },
                    },
                    {
                        "2021": {
                            unite: "ha",
                            valeur: "590",
                        },
                    },
                    {
                        "2020": {
                            unite: "ha",
                            valeur: "590",
                        },
                    },
                ],
                description: "Superficie",
            },
        };

        //@ts-ignore
        expect(filterOutBooleanCriteres(mockedCriteres)).toEqual(
            resultExpected
        );
    });
});
