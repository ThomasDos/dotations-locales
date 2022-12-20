import formatDotationsToExportCsv from "utils/formatDotationsToExportCsv";
import dotationsMocked from "__fixtures__/dotationsMocked";

describe("formatDotationsToExportCsv(dotations: Dotations)", () => {
    it("should return an array formatted from dotations to export CSV", () => {
        expect(formatDotationsToExportCsv(dotationsMocked)).toEqual([
            {
                "2021": "264940",
                "2022": "263676",
                title: "Dotation Forfaitaire (DF)",
            },
            {
                "2021": "0",
                "2022": "0",
                title: "Dotations Nationale de Péréquation (DNP)",
            },
            {
                "2021": "86048",
                "2022": "90671",
                title: "Dotation Solidarité Rurale (DSR)",
            },
            {
                "2021": "0",
                "2022": "0",
                title: "Dotation Solidarité Urbaine (DSU)",
            },
        ]);
    });
});
