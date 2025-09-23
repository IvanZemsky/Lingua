import { type Section } from "../model/types"
import { useFetchClient } from "@/shared/api"

export function useGetAllSectionsQuery() {
  return useFetchClient<Section[]>("/sections").json()
}
