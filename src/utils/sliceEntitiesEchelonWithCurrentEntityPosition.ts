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
    if (!entities) return [];
    const entitiesLength = entities.length;

    if (entitiesLength < 11) return entities;

    if (entityIndexPosition < entitiesLength - 5 && entityIndexPosition > 5) {
        const start = entityIndexPosition - 5;
        const end = entityIndexPosition + 5;
        //ajout de 1 pour inclure le dernier élément qui n'est pas inclus dans la méthode slice
        return entities.slice(start, end + 1);
    }

    //If the entity is in the last 10 entities, we return the last 10 entities
    if (entityIndexPosition < 10) {
        return entities.slice(0, 11);
    }

    //We try to find dynamically the bottom limit of the array to display
    const endLength = entities.length - entityIndexPosition;

    //If the bottom limit is less than 5, we return increase the top limit to display 10 entities
    const start = Math.max(0, entityIndexPosition - 5 - endLength);
    const end = Math.min(entities.length - 1, entityIndexPosition + endLength);

    return entities
        .slice(start, entityIndexPosition)
        .concat(entities.slice(entityIndexPosition, end + 1));
}

export default sliceEntitiesEchelonWithCurrentEntityPosition;
