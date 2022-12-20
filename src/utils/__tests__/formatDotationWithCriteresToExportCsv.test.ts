import formatDotationWithCriteresToExportCsv from "utils/formatDotationWithCriteresToExportCsv";
import dotationMocked from "__fixtures__/dotationMocked";

describe("formatDotationWithCriteresToExportCsv(dotation: Dotation, titleTotal: string)", () => {
    it("should return an array formatted from dotation with criteres to export CSV", () => {
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
});
