import { Entity } from "models/entity/entity.interface";
import { useQuery } from "react-query";
import fetchCommune from "services/fetchCommune";

export default (code: string, enabled: boolean) =>
    useQuery<Entity>(["fetchCommune", code], async () => fetchCommune(code), {
        enabled,
    });
