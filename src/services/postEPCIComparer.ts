import { Entity, EntityDto } from "models/entity/entity.interface";
import { fetchEntitySerializer } from "models/entity/entity.serializer";

import apiDotations from "./apiDotations";

export default async (code: string, libelle: string): Promise<Entity> =>
    apiDotations
        .post(`/epci/`, {
            code,
        })
        .then(({ data }: { data: EntityDto }) => {
            return { ...fetchEntitySerializer(data), libelle };
        });
