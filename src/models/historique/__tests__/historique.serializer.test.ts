import dotationsMocked from "__fixtures__/dotationsMocked";

import { historiqueSerializer } from "../historique.serializer";

describe("Historique serializer", () => {
    it("should return an array sorted and enriched", () => {
        expect(
            historiqueSerializer(dotationsMocked.dotationForfaitaire)
        ).toEqual([
            { label: "265K€", value: 264940, year: "2021" },
            { label: "264K€", value: 263676, year: "2022" },
        ]);
    });

    it("should return an empty array if dotation.annees is empty", () => {
        expect(historiqueSerializer(dotationsMocked.dotationEmpty)).toEqual([]);
    });
});
