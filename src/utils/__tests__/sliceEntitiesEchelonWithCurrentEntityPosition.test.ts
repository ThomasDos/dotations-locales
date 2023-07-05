import sliceEntitiesEchelonWithCurrentEntityPosition from "utils/sliceEntitiesEchelonWithCurrentEntityPosition";

sliceEntitiesEchelonWithCurrentEntityPosition;
describe("sliceEntitiesEchelonWithCurrentEntityPosition(entities: DotationsEchelonFormated, entityIndexPosition: number)", () => {
    const entities = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
    ];

    it("should return an empty array if the entities array is null", () => {
        const result = sliceEntitiesEchelonWithCurrentEntityPosition(
            null as any,
            0
        );
        expect(result.length).toBe(0);
        expect(result).toEqual([]);
    });

    it("should return the entities array unmodified if the array length is less than 11", () => {
        const entitiesLength = 8;
        const entityIndexPosition = 5;
        const result = sliceEntitiesEchelonWithCurrentEntityPosition(
            entities.slice(0, entitiesLength) as any,
            entityIndexPosition
        );
        expect(result.length).toBe(entitiesLength);
        expect(result).toEqual(entities.slice(0, entitiesLength));
    });

    it("should return an array of 11 entities if the current entity is in the middle of the array", () => {
        const entityIndexPosition = 8;
        const result = sliceEntitiesEchelonWithCurrentEntityPosition(
            entities as any,
            entityIndexPosition
        );
        expect(result.length).toBe(11);
        expect(result).toEqual([
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 },
        ]);
    });

    it("should return an array of 11 entities if the current entity is at the start of the array", () => {
        const entityIndexPosition = 3;
        const result = sliceEntitiesEchelonWithCurrentEntityPosition(
            entities as any,
            entityIndexPosition
        );
        expect(result.length).toBe(11);
        expect(result).toEqual([
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
        ]);
    });

    it("should return an array of 11 entities if the current entity is at the end of the array", () => {
        const entityIndexPosition = 18;
        const result = sliceEntitiesEchelonWithCurrentEntityPosition(
            entities as any,
            entityIndexPosition
        );
        expect(result.length).toBe(11);
        expect(result).toEqual([
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 },
            { id: 14 },
            { id: 15 },
            { id: 16 },
            { id: 17 },
            { id: 18 },
            { id: 19 },
            { id: 20 },
        ]);
    });
});
