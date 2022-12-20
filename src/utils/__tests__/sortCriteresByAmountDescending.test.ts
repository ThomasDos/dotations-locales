import sortCriteresByAmountDescending from "utils/sortCriteresByAmountDescending";
import criteresMocked from "__fixtures__/criteresMocked";

describe("sortCriteresByAmountDescending(dotations: Dotations, currentYear: string)", () => {
    it("should return an empty object if there is not criteres", () => {
        const criteres = {};
        const currentYear = "2022";

        const result = sortCriteresByAmountDescending(criteres, currentYear);

        const expectedResult = {};

        expect(result).toEqual(expectedResult);
    });

    it("should return an object of 'criteres' sorted descending", () => {
        const currentYear = "2022";

        const result = sortCriteresByAmountDescending(
            criteresMocked,
            currentYear
        );

        const expectedResult = {
            longueurVoirie: {
                annees: [
                    { "2022": { unite: "m", valeur: "108801.0" } },
                    { "2021": { unite: "m", valeur: "108801" } },
                    { "2020": { unite: "m", valeur: "108801" } },
                ],
                description: "Longueur de voirie",
            },
            populationDgf: {
                annees: [
                    { "2022": { unite: null, valeur: "112712" } },
                    { "2021": { unite: null, valeur: "111261" } },
                    { "2020": { unite: null, valeur: "111100" } },
                ],
                description: "Population DGF",
            },
            populationEnfants: {
                annees: [
                    { "2022": { unite: null, valeur: "19468" } },
                    { "2021": { unite: null, valeur: "19697" } },
                    { "2020": { unite: null, valeur: "19472" } },
                ],
                description: "Population 3 à 16 ans",
            },
            populationInsee: {
                annees: [
                    { "2022": { unite: null, valeur: "111810" } },
                    { "2021": { unite: null, valeur: "110465" } },
                    { "2020": { unite: null, valeur: "110474" } },
                ],
                description: "Population INSEE",
            },
            potentielFinancierParHabitant: {
                annees: [
                    { "2022": { unite: "€", valeur: "1299.20744" } },
                    { "2021": { unite: "€", valeur: "1305.179704" } },
                    { "2020": { unite: "€", valeur: "1285.151791" } },
                ],
                description: "Potentiel financier par habitant",
            },
            revenuTotal: {
                annees: [
                    { "2022": { unite: "€", valeur: "1736450722.0" } },
                    { "2021": { unite: "€", valeur: "1680900482" } },
                    { "2020": { unite: "€", valeur: "1596092059" } },
                ],
                description: "Revenu total",
            },
            superficie: {
                annees: [
                    { "2022": { unite: "ha", valeur: "892.0" } },
                    { "2021": { unite: "ha", valeur: "892" } },
                    { "2020": { unite: "ha", valeur: "892" } },
                ],
                description: "Superficie",
            },
        };
        expect(result).toEqual(expectedResult);
    });
});
