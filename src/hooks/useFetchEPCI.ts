import { useQuery } from "@tanstack/react-query";
import { Entity } from "models/entity/entity.interface";
import fetchEPCI from "services/fetchEPCI";

const useFetchEPCI = (code: string, enabled: boolean) =>
    useQuery<Entity>(["fetchEPCI", code], async () => fetchEPCI(code), {
        enabled,
    });

export default useFetchEPCI;
