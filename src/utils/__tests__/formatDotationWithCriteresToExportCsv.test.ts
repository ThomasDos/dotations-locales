import formatDotationWithCriteresToExportCsv from "utils/formatDotationWithCriteresToExportCsv";
import criteresMocked from "__fixtures__/criteresMocked";
import dotationMocked from "__fixtures__/dotationMocked";

describe("formatDotationWithCriteresToExportCsv(dotation: Dotation, titleTotal: string)", () => {
    it("should return an array formatted from dotation without criteres to export CSV", () => {
        expect(
            formatDotationWithCriteresToExportCsv(
                dotationMocked,
                dotationMocked.title
            )
        ).toEqual([
            {
                "2021": "86048",
                "2022": "90671",
                title: "Montant total de la Dotation Solidarité Rurale (DSR)",
            },
            { "2021": " ", "2022": " ", title: " " },
        ]);
    });

    it("should return an array formatted from dotation with criteres to export CSV", () => {
        expect(
            formatDotationWithCriteresToExportCsv(
                { ...dotationMocked, criteres: criteresMocked },
                dotationMocked.title
            )
        ).toEqual([
            {
                "2020": "111100",
                "2021": "111261",
                "2022": "112712",
                title: "Population DGF",
            },
            {
                "2020": "110474",
                "2021": "110465",
                "2022": "111810",
                title: "Population INSEE",
            },
            {
                "2020": "19472",
                "2021": "19697",
                "2022": "19468",
                title: "Population 3 à 16 ans",
            },
            {
                "2020": "1596092059",
                "2021": "1680900482",
                "2022": "1736450722.0",
                title: "Revenu total",
            },
            {
                "2020": "1285.151791",
                "2021": "1305.179704",
                "2022": "1299.20744",
                title: "Potentiel financier par habitant",
            },
            {
                "2020": "892",
                "2021": "892",
                "2022": "892.0",
                title: "Superficie",
            },
            {
                "2020": "108801",
                "2021": "108801",
                "2022": "108801.0",
                title: "Longueur de voirie",
            },
            {
                "2021": "86048",
                "2022": "90671",
                title: "Montant total de la Dotation Solidarité Rurale (DSR)",
            },
            { "2021": " ", "2022": " ", title: " " },
        ]);
    });
});
