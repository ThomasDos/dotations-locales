import { dotationsMocked } from "__fixtures__/dotationsMocked";

import { historiqueSerializer } from "../historique.serializer";

describe("Historique serializer", () => {
    it("should return an array sorted and enriched", () => {
        expect(
            historiqueSerializer(dotationsMocked.dotationForfaitaire)
        ).toEqual([
            { label: "264 940K€", value: 264940, year: "2021" },
            { label: "263 676K€", value: 263676, year: "2022" },
        ]);
    });
});
