import { Entity, EntityDto } from "models/entity/entity.interface";
import { fetchEntitySerializer } from "models/entity/entity.serializer";
import apiDotations from "./apiDotations";

export default async (code: string): Promise<Entity> =>
    apiDotations
        .post(`/commune/`, {
            code,
        })
        .then(({ data }: { data: EntityDto }) => fetchEntitySerializer(data));
