import { EntityDto } from "models/entity/entity.interface";
import { fetchEntitySerializer } from "models/entity/entity.serializer";
import { EntityComparer } from "store/entitiesComparer.slice";

import apiDotations from "./apiDotations";

export default async (code: string, libelle: string): Promise<EntityComparer> =>
    apiDotations
        .post("/departement/", {
            code,
        })
        .then(({ data }: { data: EntityDto }) => {
            return { ...fetchEntitySerializer(data), libelle };
        });
