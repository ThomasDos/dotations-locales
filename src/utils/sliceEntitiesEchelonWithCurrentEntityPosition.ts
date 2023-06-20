import { DotationsEchelonFormated } from "models/comparer/comparer.interface";

/**
 * @param entities
 * @param entityIndexPosition
 * @returns {DotationsEchelonFormated} Slice the array of entities to display a subset of entities based on the current entity's position.
 * The subset includes the current entity and the five entities before and after it (if possible).
 */

function sliceEntitiesEchelonWithCurrentEntityPosition(
    entities: DotationsEchelonFormated,
    entityIndexPosition: number
) {
    //If the entity is in the first 10 entities, we return the first 10 entities
    if (entityIndexPosition < 10) {
        return entities.slice(0, 10);
    }

    //We try to find dynamically the bottom limit of the array to display
    const endLength = entities.length - entityIndexPosition;

    //If the bottom limit is less than 5, we return increase the top limit to display 10 entities
    const start = Math.max(0, entityIndexPosition - 6 - endLength);
    const end = Math.min(entities.length - 1, entityIndexPosition + endLength);

    return entities
        .slice(start, entityIndexPosition)
        .concat(entities.slice(entityIndexPosition, end + 1));
}

export default sliceEntitiesEchelonWithCurrentEntityPosition;
