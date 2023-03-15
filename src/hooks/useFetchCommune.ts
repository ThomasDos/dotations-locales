import { useQuery } from "@tanstack/react-query";
import { Entity } from "models/entity/entity.interface";
import fetchCommune from "services/fetchCommune";

export default (code: string, enabled: boolean) =>
    useQuery<Entity>(["fetchCommune", code], async () => fetchCommune(code), {
        enabled,
    });
