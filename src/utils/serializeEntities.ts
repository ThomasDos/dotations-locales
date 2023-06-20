import { EntityDto } from "models/entity/entity.interface";
import { fetchEntitySerializer } from "models/entity/entity.serializer";
import { Entities } from "store/entitiesComparer.slice";

function serializeEntities(entities: EntityDto[]): Entities {
    return entities.map(fetchEntitySerializer);
}

export default serializeEntities;
